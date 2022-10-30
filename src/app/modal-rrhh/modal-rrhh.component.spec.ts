import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRrhhComponent } from './modal-rrhh.component';

describe('ModalRrhhComponent', () => {
  let component: ModalRrhhComponent;
  let fixture: ComponentFixture<ModalRrhhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRrhhComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRrhhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
