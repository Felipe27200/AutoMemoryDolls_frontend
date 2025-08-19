import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollCreateComponent } from './doll-create.component';

describe('DollCreateComponent', () => {
  let component: DollCreateComponent;
  let fixture: ComponentFixture<DollCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
