import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutComponentComponent } from './log-out-component.component';

describe('LogOutComponentComponent', () => {
  let component: LogOutComponentComponent;
  let fixture: ComponentFixture<LogOutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogOutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
