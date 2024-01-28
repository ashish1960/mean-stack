import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistraionComponent } from './registraion/registraion.component';
import { employeeComponent } from './employee/employee.component';
import { AddemployeeComponent } from './add-employee/add-employee.component';
import { EditemployeeComponent } from './editemployee/editemployee.component';
export const routes: Routes = [
    
    { path: '', redirectTo: 'employee', pathMatch: "full"},
    { path: 'employee', component: employeeComponent },
    { path: 'add-employee', component: AddemployeeComponent},
    {path:'login', component:LoginComponent},
    {path :'registraion', component:RegistraionComponent},
    { path :'editemployee/:id', component:EditemployeeComponent}
    
];
@NgModule({
    imports: [RouterModule.forRoot(routes),],
    exports: [RouterModule]
})
export class AppRoutingModule { }