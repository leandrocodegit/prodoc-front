import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinaturaEscritaComponent } from './assinatura-escrita.component';

describe('AssinaturaEscritaComponent', () => {
  let component: AssinaturaEscritaComponent;
  let fixture: ComponentFixture<AssinaturaEscritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssinaturaEscritaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssinaturaEscritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
