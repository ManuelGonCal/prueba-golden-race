import { Component, Input, OnInit } from '@angular/core';
import { BallEntity } from 'src/app/Models/BallEntity';
import { DrumService } from 'src/app/services/drum-service/drum.service';

@Component({
  selector: 'app-bet-slip',
  templateUrl: './bet-slip.component.html',
  styleUrls: ['./bet-slip.component.scss'],
})
export class BetSlipComponent implements OnInit {
  betAmount: number;

  constructor(private drumService: DrumService) {
    this.betAmount = 0;
  }

  ngOnInit(): void {}

  handleSendBet(bet: number) {
    this.drumService.totalSelected$.subscribe((number) => {
      this.betAmount = number * bet;
    });
  }
}
