import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutsveriComponent } from './aboutsveri.component';

describe('AboutsveriComponent', () => {
  let component: AboutsveriComponent;
  let fixture: ComponentFixture<AboutsveriComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutsveriComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutsveriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
