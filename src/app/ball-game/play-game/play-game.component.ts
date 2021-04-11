import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.scss'],
})
export class PlayGameComponent implements OnInit {
  @Input()
  totalAmount: number;

  @Output()
  onPlayGame: EventEmitter<BallEntity> = new EventEmitter();

  isDisabled: boolean;

  constructor(private drumService: DrumService) {
    this.totalAmount = 0;
    this.isDisabled = true;
  }

  ngOnInit(): void {
    console.log(this.totalAmount);
  }

  ngOnChanges(): void {
    if (this.totalAmount > 0) this.isDisabled = false;
    if (this.totalAmount == 0) this.isDisabled = true;
  }

  playGame() {}
}
