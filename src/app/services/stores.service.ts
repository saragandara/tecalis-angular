import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '../models/store.model';

@Injectable({
  providedIn: 'root'
})
export class StoresService {

  private domain = 'https://rawg-video-games-database.p.rapidapi.com/';
  private keyParam = '?key=c13d9de91ed24b13abd23ec72a84ddbe';
  private headersParam = {
    "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
    "x-rapidapi-key": "45f632c4eemsh81a9c692e52deb7p18cd42jsn0cac7a27ace0"
  };

  constructor(private http: HttpClient) { }

  getStoresList(): Observable<Store[]>{
    return this.http.get<any>(this.domain + 'stores' + this.keyParam, { headers: this.headersParam })
      .pipe(map((res) => { return res.results; }));
  }

  getStoreDetail(id: number): Observable<Store>{
    return this.http.get<any>(this.domain + 'stores/' + id + this.keyParam, { headers: this.headersParam });
  }
}
