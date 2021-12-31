import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSalesInformationComponent } from './pages-sales-information.component';

describe('PagesSalesInformationComponent', () => {
  let component: PagesSalesInformationComponent;
  let fixture: ComponentFixture<PagesSalesInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSalesInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSalesInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
