import { Component, Input, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';

@Component({
  selector: 'app-single-ball',
  templateUrl: './single-ball.component.html',
  styleUrls: ['./single-ball.component.scss']
})
export class SingleBallComponent implements OnInit {
  @Input()
  ball: BallEntity;

  constructor() {}

  ngOnInit(): void {
  }

  toggleBall() {
    this.ball.isSelected = !this.ball.isSelected;
  }
}
