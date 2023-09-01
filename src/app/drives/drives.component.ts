import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DrivesService } from './drives.service';
import * as common from '../apiUrls';
import { Drives } from '../Models/Drives';
import { publishFacade } from '@angular/compiler';
import { DriveStatus } from '../Models/DriveStatus';
@Component({
  selector: 'app-drives',
  templateUrl: './drives.component.html',
  styleUrls: ['./drives.component.css']
})
export class DrivesComponent implements OnInit {
constructor(private fb:FormBuilder,private ds:DrivesService){}
workType=common.workType;
isList:boolean=true;
driveTitle:string="Add Drive";
selectedWorkType=common.workType[0];
driveForm=this.fb.group({
  driveId:[],
  CompanyName:['',Validators.required],
  DriveBy:[,Validators.required,],
  Location:['',Validators.required],
  Positions:[,Validators.required],
  Criteria:['NA',Validators.required],
  Bond:['NA',Validators.required],
  Package:['',Validators.required],
  SelectionProcess:['',Validators.required],
  WorkType:['',Validators.required],
  JobDescription:['',Validators.required],
  Result:[''],
  DriveStatusId:[]
})

ngOnInit(){
this.getUsers();
this.getAllDrives();
this.getAllDriveStatus();
this.driveTitle="Add Drive";
}
name1="Drive Status"
users:any=[];
public getUsers(){
  this.ds.getUsers().subscribe(res=>{
this.users=res;
  })
}
driveList:any=[];
public getAllDrives(){
  this.ds.getAllDrives().subscribe(res=>{
    this.driveList=res;
  });
}
public toggleScreen(){
  this.driveForm.reset();
  this.isList=!this.isList;
  this.driveTitle="Add Drive";
}
drive:Drives={};
driveById:number=1;
public saveDrive(){
this.drive.bond=this.driveForm.value.Bond;
this.drive.companyName=this.driveForm.value.CompanyName;
this.drive.criteria=this.driveForm.value.Criteria;
this.drive.driveBy= this.driveForm.value.DriveBy;
this.drive.isActive=1;
this.drive.jobDescription=this.driveForm.value.JobDescription;
this.drive.location=this.driveForm.value.Location;
this.drive.package=this.driveForm.value.Package;
this.drive.positions=this.driveForm.value.Positions;
this.drive.selectionProcess=this.driveForm.value.SelectionProcess;
this.drive.workType=this.driveForm.value.WorkType;
this.ds.postAddDrive(this.drive).subscribe(res=>{
this.isList=!this.isList;
this.getAllDrives();
});
}

isUpdate:boolean=false;
tempDriveId:number=0;
public editDrive(drive:any){
  this.getAllDriveStatus();
  this.isUpdate=true;
this.isList=!this.isList;
this.driveTitle="Update Drive";
this.driveForm.controls['CompanyName'].setValue(drive.CompanyName);
this.driveForm.controls['Location'].setValue(drive.Location);
this.driveForm.controls['DriveBy'].setValue(drive.DriveBy);
this.driveForm.controls['Bond'].setValue(drive.Bond);
this.driveForm.controls['Criteria'].setValue(drive.Criteria);
this.driveForm.controls['DriveBy'].setValue(drive.DriveBy);
this.driveForm.controls['JobDescription'].setValue(drive.JobDescription);
this.driveForm.controls['Package'].setValue(drive.Package);
this.driveForm.controls['Positions'].setValue(drive.Positions);
this.driveForm.controls['SelectionProcess'].setValue(drive.SelectionProcess);
this.driveForm.controls['WorkType'].setValue(drive.WorkType);
this.driveForm.controls['DriveStatusId'].setValue(drive.DriveStatusId);
this.selectedWorkType=drive.WorkType;
this.tempDriveId=drive.DriveId;
}

updateDrive(){
 // debugger
  this.driveForm.value.driveId=this.tempDriveId;
  console.log(this.driveForm.value);
  this.ds.postUpdateDrive(this.driveForm.value).subscribe(res=>{
    this.isList=!this.isList;
    this.getAllDrives();

  })
}

deleteDrive(driveId:number){
  let result=confirm('Do you want to delete current drive ?');
  if(result==true){
    this.ds.deleteDrive(driveId).subscribe(res=>{
      this.getAllDrives();
    })
  }
}
driveStatusList:DriveStatus[]=[];
getAllDriveStatus(){
this.ds.getAllDriveStatus().subscribe(res=>{
this.driveStatusList=res;
});
}


}


