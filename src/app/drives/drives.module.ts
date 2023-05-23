import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DrivesRoutingModule } from './drives-routing.module';
import { DrivesComponent } from './drives.component';
import { ShareModule } from '../shared.module';
import { DrivesService } from './drives.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DrivesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DrivesRoutingModule,
    ShareModule
  ],
  providers:[DrivesService]
})
export class DrivesModule { }
