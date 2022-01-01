import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeAccountComponent } from './welcome-account.component';

describe('WelcomeAccountComponent', () => {
  let component: WelcomeAccountComponent;
  let fixture: ComponentFixture<WelcomeAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeAccountComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
