import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeareComponentComponent } from './weare-component.component';

describe('WeareComponentComponent', () => {
  let component: WeareComponentComponent;
  let fixture: ComponentFixture<WeareComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeareComponentComponent]
    });
    fixture = TestBed.createComponent(WeareComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
