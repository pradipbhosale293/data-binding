import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutexamComponent } from './aboutexam.component';

describe('AboutexamComponent', () => {
  let component: AboutexamComponent;
  let fixture: ComponentFixture<AboutexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
