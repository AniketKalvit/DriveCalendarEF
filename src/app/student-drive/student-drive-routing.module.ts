import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDriveComponent } from './student-drive.component';

const routes: Routes = [{ path: '', component: StudentDriveComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentDriveRoutingModule { }
