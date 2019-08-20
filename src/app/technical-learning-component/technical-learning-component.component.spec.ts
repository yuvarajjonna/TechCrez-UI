import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalLearningComponentComponent } from './technical-learning-component.component';

describe('TechnicalLearningComponentComponent', () => {
  let component: TechnicalLearningComponentComponent;
  let fixture: ComponentFixture<TechnicalLearningComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnicalLearningComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalLearningComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
