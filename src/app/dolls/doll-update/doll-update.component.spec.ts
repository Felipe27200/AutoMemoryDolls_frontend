import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollUpdateComponent } from './doll-update.component';

describe('DollUpdateComponent', () => {
  let component: DollUpdateComponent;
  let fixture: ComponentFixture<DollUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
