import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedVideoComponent } from './liked-video.component';

describe('LikedVideoComponent', () => {
  let component: LikedVideoComponent;
  let fixture: ComponentFixture<LikedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
