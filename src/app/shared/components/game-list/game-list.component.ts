import { Router } from '@angular/router';
import { GameService } from './../../../core/services/game.service';
import { Game } from './../../../core/model/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: Game[]

  constructor(private gameService: GameService,
    private router: Router) { }

  ngOnInit(): void {
    this.gameService.readGame().subscribe(response => {
      this.games = response.games
      console.log(this.games),
      err => {
        console.log(err.status)
      }
    })
  }
}
