import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFluxoComponent } from './criar-fluxo.component';

describe('CriarFluxoComponent', () => {
  let component: CriarFluxoComponent;
  let fixture: ComponentFixture<CriarFluxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarFluxoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
