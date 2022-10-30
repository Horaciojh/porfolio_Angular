import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCurriculumComponent } from './modal-curriculum.component';

describe('ModalCurriculumComponent', () => {
  let component: ModalCurriculumComponent;
  let fixture: ComponentFixture<ModalCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
