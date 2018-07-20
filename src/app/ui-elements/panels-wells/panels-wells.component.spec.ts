import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelsWellsComponent } from './panels-wells.component';

describe('PanelsWellsComponent', () => {
  let component: PanelsWellsComponent;
  let fixture: ComponentFixture<PanelsWellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelsWellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelsWellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
