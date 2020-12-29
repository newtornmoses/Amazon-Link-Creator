import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPostbackComponent } from './add-postback.component';

describe('AddPostbackComponent', () => {
  let component: AddPostbackComponent;
  let fixture: ComponentFixture<AddPostbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPostbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPostbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
