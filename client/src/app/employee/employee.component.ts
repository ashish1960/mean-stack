import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class employeeComponent implements OnInit{

  employee: any = [];
  isloging=false;


  newemployee = {
    firstName: '',
    lastName: '',
  }
   

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    this.getUsers(); 
  }


  getUsers() {
    this.isloging=true;
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        console.log(res);

        this.employee = res.employee;
        this.isloging=false;
      },
      error: (err) => {
        console.log(err);
        this.isloging=false;
      }
    })
  }

  createUser() {
    this.http.post('http://localhost:3000/employee', this.newemployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newemployee.firstName = '';
        this.newemployee.lastName = '';
        this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteUserById(id: any) {
    this.http.delete('http://localhost:3000/employee/'+ id).subscribe({
      next: (res: any) => {
        this.getUsers();
      },
      error: (err: any) => {
      },
    });
  }


  goToAddUser() {
    this.router.navigate(['/add-employee']); 
  }

  goToregegistarion(){
    this.router.navigate(['/registraion']);
  }

  
}