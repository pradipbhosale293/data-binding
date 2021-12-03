import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutcoepComponent } from './aboutcoep.component';

describe('AboutcoepComponent', () => {
  let component: AboutcoepComponent;
  let fixture: ComponentFixture<AboutcoepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutcoepComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutcoepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
