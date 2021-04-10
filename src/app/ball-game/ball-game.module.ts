import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { SingleBallComponent } from './single-ball/single-ball.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';



@NgModule({
  declarations: [
    BallSelectorComponent,
    SingleBallComponent,
    BetSlipComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BallSelectorComponent
  ]
})
export class BallGameModule { }
