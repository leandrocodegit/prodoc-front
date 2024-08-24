import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiagramaComponent } from './view-diagrama.component';

describe('ViewDiagramaComponent', () => {
  let component: ViewDiagramaComponent;
  let fixture: ComponentFixture<ViewDiagramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewDiagramaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewDiagramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
