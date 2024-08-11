import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpuntTextoComponent } from './ipunt-texto.component';

describe('IpuntTextoComponent', () => {
  let component: IpuntTextoComponent;
  let fixture: ComponentFixture<IpuntTextoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpuntTextoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpuntTextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
