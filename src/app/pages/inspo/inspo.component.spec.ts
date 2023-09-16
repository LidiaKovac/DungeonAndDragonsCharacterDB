import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InspoComponent } from './inspo.component';

describe('InspoComponent', () => {
  let component: InspoComponent;
  let fixture: ComponentFixture<InspoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InspoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InspoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
