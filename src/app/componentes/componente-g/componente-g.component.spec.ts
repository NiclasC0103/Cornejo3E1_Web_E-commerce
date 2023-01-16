import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteGComponent } from './componente-g.component';

describe('ComponenteGComponent', () => {
  let component: ComponenteGComponent;
  let fixture: ComponentFixture<ComponenteGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
