import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnicodeToAsciiComponent } from './unicode-to-ascii.component';

describe('UnicodeToAsciiComponent', () => {
  let component: UnicodeToAsciiComponent;
  let fixture: ComponentFixture<UnicodeToAsciiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicodeToAsciiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicodeToAsciiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
