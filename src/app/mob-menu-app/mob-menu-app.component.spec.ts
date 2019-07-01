import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobMenuAppComponent } from './mob-menu-app.component';

describe('MobMenuAppComponent', () => {
  let component: MobMenuAppComponent;
  let fixture: ComponentFixture<MobMenuAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobMenuAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobMenuAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
