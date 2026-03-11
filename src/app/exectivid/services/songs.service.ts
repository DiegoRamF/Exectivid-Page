import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Song } from '@interfaces/song-interfaces';
import { map, Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class SongsService {

  private http = inject(HttpClient);

  getSongsById(id: number | undefined): Observable<Song | undefined> {
    return this.http.get<Song[]>(`data/lyrics-data/${id}.json`)
      .pipe(
        map(songs => songs.find(song => song.id === id))
      )
  };

}
