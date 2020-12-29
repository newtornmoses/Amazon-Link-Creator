import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostbacksComponent } from './postbacks.component';

describe('PostbacksComponent', () => {
  let component: PostbacksComponent;
  let fixture: ComponentFixture<PostbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
