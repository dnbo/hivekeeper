import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivePreviewComponent } from './hive-preview.component';

describe('HivePreviewComponent', () => {
  let component: HivePreviewComponent;
  let fixture: ComponentFixture<HivePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivePreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
