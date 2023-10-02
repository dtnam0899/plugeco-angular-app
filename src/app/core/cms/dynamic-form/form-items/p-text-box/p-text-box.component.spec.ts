import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTextBoxComponent } from './p-text-box.component';

describe('PTextBoxComponent', () => {
  let component: PTextBoxComponent;
  let fixture: ComponentFixture<PTextBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PTextBoxComponent]
    });
    fixture = TestBed.createComponent(PTextBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
