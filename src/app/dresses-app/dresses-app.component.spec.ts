import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DressesAppComponent } from './dresses-app.component';

describe('DressesAppComponent', () => {
  let component: DressesAppComponent;
  let fixture: ComponentFixture<DressesAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DressesAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DressesAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
