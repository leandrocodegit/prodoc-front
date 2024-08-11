import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarFecharComponent } from './salvar-fechar.component';

describe('SalvarFecharComponent', () => {
  let component: SalvarFecharComponent;
  let fixture: ComponentFixture<SalvarFecharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalvarFecharComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalvarFecharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
