import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatSnackBarModule } from "@angular/material/snack-bar";

const sharedModule=[
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatSnackBarModule
  ]

@NgModule({
imports:[sharedModule],
exports:[sharedModule]
})
export class ShareModule{

}