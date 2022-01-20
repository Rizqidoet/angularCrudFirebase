import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateStudentComponent } from './create-student/create-student.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { LoginComponent } from './login/login.component';
import { RegisterStudentComponent } from './register-student/register-student.component';

const routes: Routes = [
  { path: '', redirectTo: 'register-student', pathMatch: 'full' },
  { path: 'register-student', component: RegisterStudentComponent },
  { path: 'login', component: LoginComponent },
  { path: 'create', component: CreateStudentComponent },
  { path: 'list-student', component: ListStudentComponent },
  {
    path: 'update-student/:id',
    component: EditStudentComponent,
  },
  {
    path: 'delete-student/:id',
    component: ListStudentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule {}
