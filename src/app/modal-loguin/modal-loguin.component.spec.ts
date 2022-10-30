import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalLoguinComponent } from './modal-loguin.component';

describe('ModalLoguinComponent', () => {
  let component: ModalLoguinComponent;
  let fixture: ComponentFixture<ModalLoguinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalLoguinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalLoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
