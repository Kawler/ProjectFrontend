import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSubComponent } from './show-sub.component';

describe('ShowSubComponent', () => {
  let component: ShowSubComponent;
  let fixture: ComponentFixture<ShowSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowSubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
