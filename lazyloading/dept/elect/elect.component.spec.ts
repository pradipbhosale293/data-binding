import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectComponent } from './elect.component';

describe('ElectComponent', () => {
  let component: ElectComponent;
  let fixture: ComponentFixture<ElectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
