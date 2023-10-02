import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PNumberBoxComponent } from './p-number-box.component';

describe('PNumberBoxComponent', () => {
  let component: PNumberBoxComponent;
  let fixture: ComponentFixture<PNumberBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PNumberBoxComponent]
    });
    fixture = TestBed.createComponent(PNumberBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
