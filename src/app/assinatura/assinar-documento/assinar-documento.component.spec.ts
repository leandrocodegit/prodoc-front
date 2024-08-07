import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssinarDocumentoComponent } from './assinar-documento.component';

describe('AssinarDocumentoComponent', () => {
  let component: AssinarDocumentoComponent;
  let fixture: ComponentFixture<AssinarDocumentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssinarDocumentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssinarDocumentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
