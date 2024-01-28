import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFormProductComponent } from './add-form-product.component';

describe('AddFormProductComponent', () => {
  let component: AddFormProductComponent;
  let fixture: ComponentFixture<AddFormProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddFormProductComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddFormProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
