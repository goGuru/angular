import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftchildComponent } from './leftchild.component';

describe('LeftchildComponent', () => {
  let component: LeftchildComponent;
  let fixture: ComponentFixture<LeftchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeftchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
