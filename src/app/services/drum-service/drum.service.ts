import { Injectable } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';

@Injectable({
  providedIn: 'root',
})
export class DrumService {
  drum: BallEntity[];
  selectedAmount: number;

  constructor() {
    this.drum = [];
    this.selectedAmount = 0;
  }

  InitializeDrum(amount: number) {
    for (let i = 1; i <= amount; i++) {
      const ball = {
        color: this.generateColor(),
        isSelected: false,
        number: i,
      };

      this.drum = [...this.drum, ball];
    }
  }

  generateBall(maxIndex: number): BallEntity {
    const ball: BallEntity = {
      number: Math.floor(Math.random() * maxIndex) + 1,
      color: this.generateColor(),
      isSelected: false,
    };

    return ball;
  }

  generateColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  toggleBalls(increase: number) {
    this.selectedAmount = this.selectedAmount + increase;
  }
}
