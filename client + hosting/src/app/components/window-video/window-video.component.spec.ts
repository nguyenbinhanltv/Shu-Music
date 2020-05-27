import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowVideoComponent } from './window-video.component';

describe('WindowVideoComponent', () => {
  let component: WindowVideoComponent;
  let fixture: ComponentFixture<WindowVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindowVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
