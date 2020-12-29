import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbackCallsComponent } from './postback-calls.component';

describe('PostbackCallsComponent', () => {
  let component: PostbackCallsComponent;
  let fixture: ComponentFixture<PostbackCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbackCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbackCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
