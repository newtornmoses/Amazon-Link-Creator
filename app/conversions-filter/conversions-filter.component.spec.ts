import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionsFilterComponent } from './conversions-filter.component';

describe('ConversionsFilterComponent', () => {
  let component: ConversionsFilterComponent;
  let fixture: ComponentFixture<ConversionsFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversionsFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionsFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
