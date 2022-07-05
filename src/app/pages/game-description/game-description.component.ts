import { ActivatedRoute, Router } from '@angular/router';
import { GameService } from './../../core/services/game.service';
import { Game } from './../../core/model/game.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-description',
  templateUrl: './game-description.component.html',
  styleUrls: ['./game-description.component.css']
})
export class GameDescriptionComponent implements OnInit {
  game: Game[]

  constructor(private gameService: GameService,
    private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("_id")
    this.gameService.readGameById(id).subscribe(response => {
      this.game = response.game
      console.log(this.game)
    })
  }

}
