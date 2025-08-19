import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCenterComponent } from './cliente-center.component';

describe('ClienteCenterComponent', () => {
  let component: ClienteCenterComponent;
  let fixture: ComponentFixture<ClienteCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClienteCenterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
