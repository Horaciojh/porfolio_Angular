import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalComponent } from './datos-personal.component';

describe('DatosPersonalComponent', () => {
  let component: DatosPersonalComponent;
  let fixture: ComponentFixture<DatosPersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosPersonalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
