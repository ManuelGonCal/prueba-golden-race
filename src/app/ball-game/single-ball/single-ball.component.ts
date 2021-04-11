import { Component, Input, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-single-ball',
  templateUrl: './single-ball.component.html',
  styleUrls: ['./single-ball.component.scss'],
})
export class SingleBallComponent implements OnInit {
  @Input()
  ball: BallEntity;

  constructor(private drumService: DrumService) {}

  ngOnInit(): void {}

  toggleBall() {
    this.ball.isSelected = !this.ball.isSelected;
    this.drumService.getNumSelected();
  }
}
