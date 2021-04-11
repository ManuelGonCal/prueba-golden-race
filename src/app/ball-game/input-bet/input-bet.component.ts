import { Component, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DrumService } from 'src/app/services/drum-service/drum.service';
import { betAmountValidator } from 'src/app/validators/bet-amount-validator';

@Component({
  selector: 'app-input-bet',
  templateUrl: './input-bet.component.html',
  styleUrls: ['./input-bet.component.scss'],
})
export class InputBetComponent implements OnInit {
  betForm: FormGroup;
  betControl: FormControl;
  selectedBalls: number;

  constructor(private fb: FormBuilder, private drumService: DrumService) {
    this.selectedBalls = 0;

    this.betControl = new FormControl(5, [
      Validators.required,
      betAmountValidator,
    ]);

    this.betForm = this.fb.group({
      bet: this.betControl,
    });
  }

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.betControl.hasError('required')) {
      return 'You must enter a value';
    }

    if (this.betControl.hasError('betAmount')) {
      return 'Bet has to be more than 5';
    }
  }
}
