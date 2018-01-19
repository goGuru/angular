import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ERectComponent } from './e-rect.component';

describe('ERectComponent', () => {
  let component: ERectComponent;
  let fixture: ComponentFixture<ERectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ERectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ERectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
