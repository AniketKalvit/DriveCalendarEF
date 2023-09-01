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

isUpdatebtn:boolean=false;
editStudent(stud:any){
  this.isListView=!this.isListView;
  this.isUpdatebtn=true;
  this.studentForm.setValue({
    StudentId:stud.StudentId,
StudentName:stud.StudentName,
BatchName:stud.BatchName,
Ratings:stud.Ratings,
IsActive:1
  });
}
toggleScreen(){
  this.isListView=!this.isListView;
  this.isUpdatebtn=false;
  this.studentForm.reset();
}

newStudent:Student={};
saveStudent(){
  this.newStudent.StudentName=this.studentForm.value.StudentName;
    this.newStudent.BatchName=this.studentForm.value.BatchName;
    this.newStudent.Ratings=this.studentForm.value.Ratings;
    this.newStudent.IsActive=1;
  if(!this.isUpdatebtn){
    this.studentService.postAddStudent(this.newStudent).subscribe(res=>{
      this.isListView=!this.isListView;
  this.getStudentList();
    });
  }
  else if(this.isUpdatebtn){
    this.newStudent.StudentId=this.studentForm.value.StudentId;
    this.studentService.postUpdateStudent(this.newStudent).subscribe(res=>{
      this.isListView=!this.isListView;
  this.getStudentList();
    });
  }
  
}

deleteStudent(id:number){
  let result=confirm('Do you want to delete '+id+' ?');
  if(result==true)
  {
    this.studentService.deleteStudent(id).subscribe(res=>{
      this.getStudentList();
  });
  }
 
}


}
