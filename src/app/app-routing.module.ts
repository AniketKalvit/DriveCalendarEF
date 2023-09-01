import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './Register/register.component';
import { LoginComponent } from './Login/login.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
 {path:'register',component:RegisterComponent},
 {path:'login',component:LoginComponent},
  { path: 'drives', loadChildren: () => import('./drives/drives.module').then(m => m.DrivesModule) },
  { path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },
  { path: 'student-drive', loadChildren: () => import('./student-drive/student-drive.module').then(m => m.StudentDriveModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
