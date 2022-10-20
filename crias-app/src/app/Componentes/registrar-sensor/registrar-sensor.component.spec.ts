import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarSensorComponent } from './registrar-sensor.component';

describe('RegistrarSensorComponent', () => {
  let component: RegistrarSensorComponent;
  let fixture: ComponentFixture<RegistrarSensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarSensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarSensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
