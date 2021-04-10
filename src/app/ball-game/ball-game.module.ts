import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { SingleBallComponent } from './single-ball/single-ball.component';



@NgModule({
  declarations: [
    BallSelectorComponent,
    SingleBallComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BallSelectorComponent
  ]
})
export class BallGameModule { }
