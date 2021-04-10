import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleBallComponent } from './single-ball.component';

describe('SingleBallComponent', () => {
  let component: SingleBallComponent;
  let fixture: ComponentFixture<SingleBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
