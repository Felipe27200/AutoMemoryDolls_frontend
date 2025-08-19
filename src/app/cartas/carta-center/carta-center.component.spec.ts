import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaCenterComponent } from './carta-center.component';

describe('CartaCenterComponent', () => {
  let component: CartaCenterComponent;
  let fixture: ComponentFixture<CartaCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
