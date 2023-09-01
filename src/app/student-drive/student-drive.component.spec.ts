import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDriveComponent } from './student-drive.component';

describe('StudentDriveComponent', () => {
  let component: StudentDriveComponent;
  let fixture: ComponentFixture<StudentDriveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDriveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDriveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
