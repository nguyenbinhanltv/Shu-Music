import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsUkComponent } from './us-uk.component';

describe('UsUkComponent', () => {
  let component: UsUkComponent;
  let fixture: ComponentFixture<UsUkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsUkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsUkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
