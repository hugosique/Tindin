import { Game, GameResponse } from './../model/game.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  baseUrl = "https://api-labs.tindin.com.br/"
  pageNumber = 0

  //https://api-labs.tindin.com.br/games?perPage=1&page=1 (URL Por paginação (temporario))

  constructor(private http: HttpClient) {

  }

  readGame(): Observable<GameResponse> {
    return this.http.get<GameResponse>(`${this.baseUrl}games?perPage=4&page=1`)
  }

  readGameById(id: string): Observable<GameResponse> {
    const url = `${this.baseUrl}games/${id}`;
    return this.http.get<GameResponse>(url)
  }
}
