import { Injectable } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';

@Injectable({
  providedIn: 'root'
})
export class DrumService {

  constructor() { }

  InitializeDrum(amount: number): BallEntity[] {
    let drum: BallEntity[] = [];

    for(let i = 1; i <= amount; i++) {
      const ball = {
        color: this.generateColor(),
        isSelected: false,
        number: i
      };

      drum = [...drum, ball];
    }

    return drum;
  }

  generateBall(maxIndex: number): BallEntity {
    const ball: BallEntity = {
      number: Math.floor(Math.random() * maxIndex) + 1,
      color: this.generateColor(),
      isSelected: false
    };

    return ball
  }

  generateColor(): string {
    const letters = '0123456789ABCDEF';
    let color = "#";

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }
}
