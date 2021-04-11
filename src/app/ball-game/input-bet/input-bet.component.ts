import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-bet',
  templateUrl: './input-bet.component.html',
  styleUrls: ['./input-bet.component.scss'],
})
export class InputBetComponent implements OnInit {
  selectedBalls: number;

  constructor() {
    this.selectedBalls = 0;
  }

  ngOnInit(): void {}
}