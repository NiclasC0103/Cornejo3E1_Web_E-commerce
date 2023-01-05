import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteFComponent } from './componente-f.component';

describe('ComponenteFComponent', () => {
  let component: ComponenteFComponent;
  let fixture: ComponentFixture<ComponenteFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
