import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensagemDialogComponent } from './mensagem-dialog.component';

describe('MensagemDialogComponent', () => {
  let component: MensagemDialogComponent;
  let fixture: ComponentFixture<MensagemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MensagemDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MensagemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
