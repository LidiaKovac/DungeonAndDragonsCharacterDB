import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterHeaderComponent } from './character-header.component';

describe('CharacterHeaderComponent', () => {
  let component: CharacterHeaderComponent;
  let fixture: ComponentFixture<CharacterHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
