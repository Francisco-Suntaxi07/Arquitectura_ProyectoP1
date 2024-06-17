import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInscriptionComponent } from './course-inscription.component';

describe('CourseInscriptionComponent', () => {
  let component: CourseInscriptionComponent;
  let fixture: ComponentFixture<CourseInscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseInscriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
