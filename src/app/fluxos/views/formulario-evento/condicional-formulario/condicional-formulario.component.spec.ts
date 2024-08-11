import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalFormularioComponent } from './condicional-formulario.component';

describe('CondicionalFormularioComponent', () => {
  let component: CondicionalFormularioComponent;
  let fixture: ComponentFixture<CondicionalFormularioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalFormularioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalFormularioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
