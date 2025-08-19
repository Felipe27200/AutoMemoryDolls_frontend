import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollListComponent } from './doll-list.component';

describe('DollListComponent', () => {
  let component: DollListComponent;
  let fixture: ComponentFixture<DollListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
