import { Component, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  ballList: BallEntity[];
  ballsAmount: number

  constructor(drumService: DrumService) {
    this.ballsAmount = 10;
    this.ballList = drumService.InitializeDrum(this.ballsAmount);
  }

  ngOnInit(): void {
  }

}
