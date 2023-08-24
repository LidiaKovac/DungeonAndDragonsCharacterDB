import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleAbilityComponent } from './single-ability.component';

describe('SingleAbilityComponent', () => {
  let component: SingleAbilityComponent;
  let fixture: ComponentFixture<SingleAbilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleAbilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleAbilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
