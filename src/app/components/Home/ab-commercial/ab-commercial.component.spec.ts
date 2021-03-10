import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbComComponent } from './ab-commercial.component';

describe('AbComComponent', () => {
  let component: AbComComponent;
  let fixture: ComponentFixture<AbComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});