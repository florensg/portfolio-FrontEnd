import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacionDeleteComponent } from './educacion-delete.component';

describe('EducacionDeleteComponent', () => {
  let component: EducacionDeleteComponent;
  let fixture: ComponentFixture<EducacionDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EducacionDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducacionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
