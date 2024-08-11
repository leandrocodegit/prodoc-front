import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicionalAssinaturaComponent } from './condicional-assinatura.component';

describe('CondicionalAssinaturaComponent', () => {
  let component: CondicionalAssinaturaComponent;
  let fixture: ComponentFixture<CondicionalAssinaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicionalAssinaturaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicionalAssinaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
