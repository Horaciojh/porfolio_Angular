import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalFotoComponent } from './modal-foto.component';

describe('ModalFotoComponent', () => {
  let component: ModalFotoComponent;
  let fixture: ComponentFixture<ModalFotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalFotoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalFotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
