import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbResComponent } from './ab-residential.component';

describe('AbResComponent', () => {
  let component: AbResComponent;
  let fixture: ComponentFixture<AbResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});