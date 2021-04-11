import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { BallSelectorComponent } from './ball-selector/ball-selector.component';
import { SingleBallComponent } from './single-ball/single-ball.component';
import { BetSlipComponent } from './bet-slip/bet-slip.component';
import { DisplaySelectionComponent } from './display-selection/display-selection.component';
import { InputBetComponent } from './input-bet/input-bet.component';
import { GameWrapperComponent } from './game-wrapper/game-wrapper.component';
import { PlayGameComponent } from './play-game/play-game.component';

@NgModule({
  declarations: [
    BallSelectorComponent,
    SingleBallComponent,
    BetSlipComponent,
    DisplaySelectionComponent,
    InputBetComponent,
    GameWrapperComponent,
    PlayGameComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [GameWrapperComponent],
})
export class BallGameModule {}
