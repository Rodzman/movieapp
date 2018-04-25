import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesUnitComponent } from './movies-unit.component';

describe('MoviesUnitComponent', () => {
  let component: MoviesUnitComponent;
  let fixture: ComponentFixture<MoviesUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviesUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoviesUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
