import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedDressAppComponent } from './selected-dress-app.component';

describe('SelectedDressAppComponent', () => {
  let component: SelectedDressAppComponent;
  let fixture: ComponentFixture<SelectedDressAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedDressAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedDressAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
