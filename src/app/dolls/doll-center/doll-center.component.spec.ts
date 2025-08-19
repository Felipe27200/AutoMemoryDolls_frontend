import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DollCenterComponent } from './doll-center.component';

describe('DollCenterComponent', () => {
  let component: DollCenterComponent;
  let fixture: ComponentFixture<DollCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DollCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DollCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
