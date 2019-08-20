import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTrendingComponentComponent } from './top-trending-component.component';

describe('TopTrendingComponentComponent', () => {
  let component: TopTrendingComponentComponent;
  let fixture: ComponentFixture<TopTrendingComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTrendingComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTrendingComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
