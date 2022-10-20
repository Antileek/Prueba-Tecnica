import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriasComponent } from './crias.component';

describe('CriasComponent', () => {
  let component: CriasComponent;
  let fixture: ComponentFixture<CriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
