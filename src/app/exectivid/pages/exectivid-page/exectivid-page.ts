import { Component, computed, inject } from '@angular/core';
import { AlbumService } from '../../services/exectivid.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-exectivid-page',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './exectivid-page.html',
})
export default class ExectividPage {
  private albumService = inject(AlbumService);

  albumesResource = rxResource({
    stream: () => this.albumService.getAlbumes()
  });

  albumes = computed(() => this.albumesResource.value());

};
