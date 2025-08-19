import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaListComponent } from './carta-list.component';

describe('CartaListComponent', () => {
  let component: CartaListComponent;
  let fixture: ComponentFixture<CartaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
