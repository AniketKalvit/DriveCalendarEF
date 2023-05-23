import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { StudentService } from './students.service';
import { FormsModule } from '@angular/forms';
import { ShareModule } from '../shared.module';


@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    ShareModule
  ],
  providers:[StudentService]
})
export class StudentsModule { }
