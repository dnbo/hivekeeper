import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivesPageComponent } from './hives-page.component';

describe('HivesPageComponent', () => {
  let component: HivesPageComponent;
  let fixture: ComponentFixture<HivesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
