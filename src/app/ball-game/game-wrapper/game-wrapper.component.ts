import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-wrapper',
  templateUrl: './game-wrapper.component.html',
  styleUrls: ['./game-wrapper.component.scss'],
})
export class GameWrapperComponent implements OnInit {
  @Input()
  ballsAmount: number;

  constructor() {}

  ngOnInit(): void {}
}
