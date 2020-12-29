import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazonLinksComponent } from './amazon-links.component';

describe('AmazonLinksComponent', () => {
  let component: AmazonLinksComponent;
  let fixture: ComponentFixture<AmazonLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmazonLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazonLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
