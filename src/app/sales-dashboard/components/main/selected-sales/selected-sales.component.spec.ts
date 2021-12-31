import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSalesComponent } from './selected-sales.component';

describe('SelectedSalesComponent', () => {
  let component: SelectedSalesComponent;
  let fixture: ComponentFixture<SelectedSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
