import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollFormComponent } from './doll-form.component';

describe('DollFormComponent', () => {
  let component: DollFormComponent;
  let fixture: ComponentFixture<DollFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
