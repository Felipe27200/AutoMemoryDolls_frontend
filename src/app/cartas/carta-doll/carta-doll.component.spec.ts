import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaDollComponent } from './carta-doll.component';

describe('CartaDollComponent', () => {
  let component: CartaDollComponent;
  let fixture: ComponentFixture<CartaDollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaDollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaDollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
