import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { StudentService } from './students.service';
import { Student } from '../Models/Student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
constructor(private fb:FormBuilder,private studentService:StudentService){}

studentForm=this.fb.group({
StudentId:[],
StudentName:['',Validators.required],
BatchName:['',Validators.required],
Ratings:[],
IsActive:[1]
});

studentTitle="Add Student";
isListView:boolean=true;
ngOnInit(): void {
  this.getStudentList();
}
studentList:any=[];
getStudentList(){
  this.studentService.getStudentList().subscribe(result=>{
    this.studentList=result;
  })
}

toggleScreen(){
  this.isListView=!this.isListView;
}

newStudent:Student={};
saveStudent(){
  this.newStudent.StudentName=this.studentForm.value.StudentName;
  this.newStudent.BatchName=this.studentForm.value.BatchName;
  this.newStudent.Ratings=this.studentForm.value.Ratings;
  this.newStudent.IsActive=1;
  this.studentService.postAddDrive(this.newStudent).subscribe(res=>{
    this.isListView=!this.isListView;
    this.getStudentList();
  })
}
}
