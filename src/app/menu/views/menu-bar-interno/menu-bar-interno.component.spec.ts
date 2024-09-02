import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuBarInternoComponent } from './menu-bar-interno.component';

describe('MenuBarInternoComponent', () => {
  let component: MenuBarInternoComponent;
  let fixture: ComponentFixture<MenuBarInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuBarInternoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuBarInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
