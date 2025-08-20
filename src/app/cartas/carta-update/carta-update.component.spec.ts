import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaUpdateComponent } from './carta-update.component';

describe('CartaUpdateComponent', () => {
  let component: CartaUpdateComponent;
  let fixture: ComponentFixture<CartaUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
