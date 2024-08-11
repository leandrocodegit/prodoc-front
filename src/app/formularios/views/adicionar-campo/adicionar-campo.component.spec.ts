import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarCampoComponent } from './adicionar-campo.component';

describe('AdicionarCampoComponent', () => {
  let component: AdicionarCampoComponent;
  let fixture: ComponentFixture<AdicionarCampoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarCampoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdicionarCampoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
