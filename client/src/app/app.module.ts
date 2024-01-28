import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterOutlet } from "@angular/router";
import { CommonModule } from "@angular/common";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { RegistraionComponent } from "./registraion/registraion.component";
import { employeeComponent } from "./employee/employee.component";
import { AddemployeeComponent } from "./add-employee/add-employee.component";
import { EditemployeeComponent } from "./editemployee/editemployee.component";
@NgModule({
    declarations: [
        AppComponent,
        employeeComponent,
        AddemployeeComponent,
        LoginComponent,
        RegistraionComponent,
        EditemployeeComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule, 
        FormsModule,
        ReactiveFormsModule,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}