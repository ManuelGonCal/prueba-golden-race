import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss'],
})
export class BallSelectorComponent implements OnInit {
  @Input()
  ballsAmount: number;

  ballList: BallEntity[];

  constructor(private drumService: DrumService) {}

  ngOnInit(): void {
    this.drumService.InitializeDrum(this.ballsAmount);
    this.ballList = this.drumService.drum;
  }
}
