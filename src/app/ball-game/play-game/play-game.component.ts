import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
})
export class PlayGameComponent implements OnInit {
  totalAmount: number;

  constructor() {
    this.totalAmount = 0;
  }

  ngOnInit(): void {}
}
