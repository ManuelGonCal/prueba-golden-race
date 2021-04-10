import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySelectionComponent } from './display-selection.component';

describe('DisplaySelectionComponent', () => {
  let component: DisplaySelectionComponent;
  let fixture: ComponentFixture<DisplaySelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaySelectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
