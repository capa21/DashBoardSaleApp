import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSaleComponent } from './actions-sale.component';

describe('ActionsSaleComponent', () => {
  let component: ActionsSaleComponent;
  let fixture: ComponentFixture<ActionsSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsSaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
