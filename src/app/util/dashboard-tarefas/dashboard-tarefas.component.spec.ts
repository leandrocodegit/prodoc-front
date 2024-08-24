import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTarefasComponent } from './dashboard-tarefas.component';

describe('DashboardTarefasComponent', () => {
  let component: DashboardTarefasComponent;
  let fixture: ComponentFixture<DashboardTarefasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashboardTarefasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
