import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbackLogsComponent } from './postback-logs.component';

describe('PostbackLogsComponent', () => {
  let component: PostbackLogsComponent;
  let fixture: ComponentFixture<PostbackLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbackLogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbackLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
