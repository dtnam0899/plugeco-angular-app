import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteLayoutComponent } from './lite-layout.component';

describe('LiteLayoutComponent', () => {
  let component: LiteLayoutComponent;
  let fixture: ComponentFixture<LiteLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LiteLayoutComponent]
    });
    fixture = TestBed.createComponent(LiteLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
