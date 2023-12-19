import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuestionComponent } from './question/question.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:'', redirectTo:'welcome',pathMatch:"full"},
  {path:"welcome", component:WelcomeComponent},
  {path:"question", component:QuestionComponent},
  {path: 'employee', component: EmployeeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }