import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutpandharpurComponent } from './aboutpandharpur.component';

describe('AboutpandharpurComponent', () => {
  let component: AboutpandharpurComponent;
  let fixture: ComponentFixture<AboutpandharpurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutpandharpurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutpandharpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
