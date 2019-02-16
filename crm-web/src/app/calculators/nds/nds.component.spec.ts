import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NdsComponent } from './nds.component';

describe('NdsComponent', () => {
  let component: NdsComponent;
  let fixture: ComponentFixture<NdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NdsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
