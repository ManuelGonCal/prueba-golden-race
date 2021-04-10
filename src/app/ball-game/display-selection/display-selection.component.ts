import { Component, Input, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';

@Component({
  selector: 'app-display-selection',
  templateUrl: './display-selection.component.html',
  styleUrls: ['./display-selection.component.scss']
})
export class DisplaySelectionComponent implements OnInit {

  @Input()
  ballsAmount: BallEntity[]

  constructor() { }

  ngOnInit(): void {
  }

}
