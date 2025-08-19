import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaFormComponent } from './carta-form.component';

describe('CartaFormComponent', () => {
  let component: CartaFormComponent;
  let fixture: ComponentFixture<CartaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
