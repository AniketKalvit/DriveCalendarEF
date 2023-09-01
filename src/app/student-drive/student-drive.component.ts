import { Component, OnInit } from '@angular/core';
import { StudentDriveService } from './student-drive.service';
import { DriveStatus } from '../Models/DriveStatus';
import { StudentDriveOutputDto } from '../Models/StudentDriveOutputDto';
import { FormBuilder } from '@angular/forms';
import { StudentService } from '../students/students.service';
import { DrivesService } from '../drives/drives.service';

@Component({
  selector: 'app-student-drive',
  templateUrl: './student-drive.component.html',
  styleUrls: ['./student-drive.component.css']
})
export class StudentDriveComponent implements OnInit {

  constructor(private driveService:DrivesService,private studentService:StudentService,private studentDriveService:StudentDriveService,private fb:FormBuilder){}
  ngOnInit(): void {
    this.getStudentDriveList();
    this.getStudentDriveStatusList();
   
  }
  studentDriveForm=this.fb.group({
   id:[],
   studentId:[],
   driveId:[],
   statusId:[],
   isActive:[]
  });


 driveStatusList:DriveStatus[]=[];
  public getStudentDriveStatusList(){
  this.studentDriveService.getStudentDriveStatus().subscribe(result=>{
    this.driveStatusList=result;
  });
  }

  studentDrivesList:StudentDriveOutputDto[]=[];
  public getStudentDriveList(){
    this.studentDriveService.getStudentDrives().subscribe(result=>{
      this.studentDrivesList=result;
      console.log(this.studentDrivesList)
    });
    }

    isListView:boolean=true;
    title:string="Add Student to Drive";
    toggleScreen(){
      this.title="Add Student to Drive";
      this.isUpdate=false;
      this.getAllStudents();
      this.getAllStudentStatusList();
      this.getAllDriveList();
      this.isListView=!this.isListView;
      this.studentDriveForm.reset();

    }
    studentList:any=[];
    getAllStudents(){
      this.studentService.getStudentList().subscribe(res=>{
        if(!!res){
          this.studentList=res;
        }
      })
    }
     studentStatusList:any=[];
    getAllStudentStatusList(){
       this.studentDriveService.getStudentDriveStatus().subscribe(res=>{
        if(!!res){
          this.studentStatusList=res;
        }
       })
    }

    driveList:any=[];
    getAllDriveList(){
      this.driveService.getAllDrives().subscribe(res=>{
        if(!!res){
          this.driveList=res;
        }
      })
    }
    studentDrive:any={};
    saveStudentDrive(){
      this.studentDrive.studentId=this.studentDriveForm.value.studentId;
      this.studentDrive.driveId=this.studentDriveForm.value.driveId;
      this.studentDrive.statusId=this.studentDriveForm.value.statusId;
      if(this.isUpdate){
        this.studentDrive.Id=this.tempStudentDriveId;
        this.studentDriveService.updateStudentDrive(this.studentDrive).subscribe(res=>{
          this.isListView=!this.isListView;
          this.getStudentDriveList();
          this.studentDriveForm.reset();
        });
      }
      else{
        this.studentDriveService.postApplyToDrive(this.studentDrive).subscribe(res=>{
          this.isListView=!this.isListView;
          this.getStudentDriveList();
          this.studentDriveForm.reset();
        });
      }
      
    
    }
    isUpdate:boolean=false;
    tempStudentDriveId:number=0;
    editStudentDrive(data:any){
      this.title="Update Student to Drive";
      this.getAllStudents();
      this.getAllStudentStatusList();
      this.getAllDriveList();
      this.isListView=!this.isListView;
      this.isUpdate=true;
      this.studentDriveForm.controls['driveId'].setValue(data.DriveId);
      this.studentDriveForm.controls['statusId'].setValue(data.StatusId);
      this.studentDriveForm.controls['studentId'].setValue(data.StudentId);
      this.tempStudentDriveId=data.Id;
    }

    deleteStudentDrive(id:number){
      let result=confirm('Do you want to delete '+id+' ?');
      if(result==true){
        this.studentDriveService.deleteStudentDrive(id).subscribe(res=>{
          this.getStudentDriveList();
         });
      }
     
    }
}
