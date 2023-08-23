import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BubbleInputComponent } from './bubble-input.component';

describe('BubbleInputComponent', () => {
  let component: BubbleInputComponent;
  let fixture: ComponentFixture<BubbleInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BubbleInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BubbleInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
