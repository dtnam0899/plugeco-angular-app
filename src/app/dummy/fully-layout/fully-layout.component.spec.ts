import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullyLayoutComponent } from './fully-layout.component';

describe('FullyLayoutComponent', () => {
  let component: FullyLayoutComponent;
  let fixture: ComponentFixture<FullyLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullyLayoutComponent]
    });
    fixture = TestBed.createComponent(FullyLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
