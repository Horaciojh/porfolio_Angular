import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSofwareComponent } from './modal-sofware.component';

describe('ModalSofwareComponent', () => {
  let component: ModalSofwareComponent;
  let fixture: ComponentFixture<ModalSofwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSofwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalSofwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
