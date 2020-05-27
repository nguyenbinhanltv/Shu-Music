import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VietnamComponent } from './vietnam.component';

describe('VietnamComponent', () => {
  let component: VietnamComponent;
  let fixture: ComponentFixture<VietnamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VietnamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VietnamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
