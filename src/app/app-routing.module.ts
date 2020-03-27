import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {AdminComponent} from './admin/admin.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

const routes: Routes = [
  {path: '',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'user',component: UserhomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'adminhome',component:UserdetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
