import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCreateComponent } from './carta-create.component';

describe('CartaCreateComponent', () => {
  let component: CartaCreateComponent;
  let fixture: ComponentFixture<CartaCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
