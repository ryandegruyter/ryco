import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NeuomorphCardComponent } from './neuomorph-card.component';

describe('CardComponent', () => {
  let component: NeuomorphCardComponent;
  let fixture: ComponentFixture<NeuomorphCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuomorphCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NeuomorphCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
