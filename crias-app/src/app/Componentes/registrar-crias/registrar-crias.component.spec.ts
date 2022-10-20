import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCriasComponent } from './registrar-crias.component';

describe('RegistrarCriasComponent', () => {
  let component: RegistrarCriasComponent;
  let fixture: ComponentFixture<RegistrarCriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarCriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarCriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
