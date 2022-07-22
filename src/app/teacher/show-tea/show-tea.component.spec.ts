import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowTeaComponent } from './show-tea.component';

describe('ShowTeaComponent', () => {
  let component: ShowTeaComponent;
  let fixture: ComponentFixture<ShowTeaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowTeaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowTeaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
