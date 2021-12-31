import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesSalesNavigationComponent } from './pages-sales-navigation.component';

describe('PagesSalesNavigationComponent', () => {
  let component: PagesSalesNavigationComponent;
  let fixture: ComponentFixture<PagesSalesNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesSalesNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesSalesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
