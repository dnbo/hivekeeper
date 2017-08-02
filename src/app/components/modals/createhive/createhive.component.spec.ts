import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatehiveComponent } from './createhive.component';

describe('CreatehiveComponent', () => {
  let component: CreatehiveComponent;
  let fixture: ComponentFixture<CreatehiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatehiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatehiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
