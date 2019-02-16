import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorsIndexComponent } from './calculators-index.component';

describe('CalculatorsIndexComponent', () => {
  let component: CalculatorsIndexComponent;
  let fixture: ComponentFixture<CalculatorsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
