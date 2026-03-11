import { Component, computed, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { AlbumService } from '@services/exectivid.service';
import { SongsService } from '@services/songs.service';

@Component({
  selector: 'song-list',
  imports: [RouterLink],
  templateUrl: './song-list.html',
})
export default class SongList {
  albumService = inject(AlbumService);
  songsService = inject(SongsService);
  route = inject(ActivatedRoute);

  albumSlug = toSignal<string>(
    this.route.params
    .pipe(
      map(params => params['slug']),
    ),
  );

  songId = toSignal<number>(
    this.route.params
      .pipe(
        map(params => Number(params['id']))
      )
  )

  albumResource = rxResource({
    params: () => ({slug: this.albumSlug()}),
    stream: ({params}) => this.albumService.getAlbumBySlug(params.slug).pipe(tap(console.log)),
  });

  songResource = rxResource({
    params: () => ({id: this.songId()}),
    stream: ({params}) => this.songsService.getSongsById(params.id).pipe(tap(console.log))
  })

  albumInfo = computed(() => this.albumResource.value())

};
