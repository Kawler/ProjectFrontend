import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTeaComponent } from './add-edit-tea.component';

describe('AddEditTeaComponent', () => {
  let component: AddEditTeaComponent;
  let fixture: ComponentFixture<AddEditTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
