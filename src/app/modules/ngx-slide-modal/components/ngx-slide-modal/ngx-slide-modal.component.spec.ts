import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxSlideModalComponent } from './ngx-slide-modal.component';

describe('NgxSlideModalComponent', () => {
  let component: NgxSlideModalComponent;
  let fixture: ComponentFixture<NgxSlideModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxSlideModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxSlideModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
