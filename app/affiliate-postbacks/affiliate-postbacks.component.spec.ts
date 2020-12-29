import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatePostbacksComponent } from './affiliate-postbacks.component';

describe('AffiliatePostbacksComponent', () => {
  let component: AffiliatePostbacksComponent;
  let fixture: ComponentFixture<AffiliatePostbacksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AffiliatePostbacksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatePostbacksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
