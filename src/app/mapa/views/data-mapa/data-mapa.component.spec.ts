import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMapaComponent } from './data-mapa.component';

describe('DataMapaComponent', () => {
  let component: DataMapaComponent;
  let fixture: ComponentFixture<DataMapaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataMapaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMapaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
