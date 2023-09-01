import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentDriveRoutingModule } from './student-drive-routing.module';
import { StudentDriveComponent } from './student-drive.component';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../shared.module';


@NgModule({
  declarations: [
    StudentDriveComponent
  ],
  imports: [
    CommonModule,
    StudentDriveRoutingModule,
    ShareModule
  ]
})
export class StudentDriveModule { }
