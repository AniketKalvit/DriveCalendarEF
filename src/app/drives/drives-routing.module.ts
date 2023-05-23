import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DrivesComponent } from './drives.component';

const routes: Routes = [{ path: '', component: DrivesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DrivesRoutingModule { }
