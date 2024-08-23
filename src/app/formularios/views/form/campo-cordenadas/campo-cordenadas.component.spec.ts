import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoCordenadasComponent } from './campo-cordenadas.component';

describe('CampoCordenadasComponent', () => {
  let component: CampoCordenadasComponent;
  let fixture: ComponentFixture<CampoCordenadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CampoCordenadasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampoCordenadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
