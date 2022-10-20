import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarCriasComponent } from './editar-crias.component';

describe('EditarCriasComponent', () => {
  let component: EditarCriasComponent;
  let fixture: ComponentFixture<EditarCriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarCriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarCriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
