import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteEComponent } from './componente-e.component';

describe('ComponenteEComponent', () => {
  let component: ComponenteEComponent;
  let fixture: ComponentFixture<ComponenteEComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteEComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteEComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
