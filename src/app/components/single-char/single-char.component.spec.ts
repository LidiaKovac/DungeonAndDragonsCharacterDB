import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCharComponent } from './single-char.component';

describe('SingleCharComponent', () => {
  let component: SingleCharComponent;
  let fixture: ComponentFixture<SingleCharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
