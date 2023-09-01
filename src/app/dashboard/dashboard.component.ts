import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
constructor(private dashboardService:DashboardService){}

totalDriveCount:any=0;
totalPlacementCount:any=0;
totalStudentApplied:any=0;
totalStudentCount:any=0;
totalStudentShortlisted:any=0;
totalRejectedStudents:any=0;
ngOnInit(): void {
  this.getTotalDriveCount();
  this.getTotalPlacementCount();
  this.getTotalStudentApplied();
  this.getTotalStudentCount();
  this.getTotalStudentShortlisted();
  this.getTotalRejectedStudents();
}

public getTotalDriveCount(){
  this.dashboardService.getTotalDriveCount().subscribe(res=>{
    this.totalDriveCount=res;
  })
}
public getTotalPlacementCount(){
  this.dashboardService.getTotalPlacementCount().subscribe(res=>{
    this.totalPlacementCount=res;
  })
}
public getTotalStudentApplied(){
  this.dashboardService.getTotalStudentApplied().subscribe(res=>{
    this.totalStudentApplied=res;
  })
}
public getTotalStudentCount(){
  this.dashboardService.getTotalStudentCount().subscribe(res=>{
    this.totalStudentCount=res;
  })
}

public getTotalStudentShortlisted(){
  this.dashboardService.getTotalStudentShortlisted().subscribe(res=>{
    this.totalStudentShortlisted=res;
  })
}
public getTotalRejectedStudents(){
  this.dashboardService.getTotalRejectedStudents().subscribe(res=>{
    this.totalRejectedStudents=res;
  })
}
}
