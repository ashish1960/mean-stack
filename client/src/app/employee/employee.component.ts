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

  newemployee = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient,private router: Router) {
  }

  getUsers() {
    this.http.get('http://localhost:3000/employee').subscribe({
      next: (res: any) => {
        console.log(res);

        this.employee = res.employee;
      },
      error: (err) => {
        console.log(err);
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

  deleteUser(id: any) {
    this.http.delete('http://localhost:3000/employee/' + id).subscribe({
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

  ngOnInit(): void {
    this.getUsers(); 
  }

}