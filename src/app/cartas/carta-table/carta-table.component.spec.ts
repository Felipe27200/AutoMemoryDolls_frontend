import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaTableComponent } from './carta-table.component';

describe('CartaTableComponent', () => {
  let component: CartaTableComponent;
  let fixture: ComponentFixture<CartaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
