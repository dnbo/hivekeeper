import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivesComponent } from './hives.component';

describe('HivesComponent', () => {
  let component: HivesComponent;
  let fixture: ComponentFixture<HivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
