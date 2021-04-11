import { Component, Input, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-display-selection',
  templateUrl: './display-selection.component.html',
  styleUrls: ['./display-selection.component.scss'],
})
export class DisplaySelectionComponent implements OnInit {
  ballsList: BallEntity[];

  constructor(private drumService: DrumService) {
    this.ballsList = [];
  }

  ngOnInit(): void {
    this.ballsList = this.drumService.getDrum();
  }
}
