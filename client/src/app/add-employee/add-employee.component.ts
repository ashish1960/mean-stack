import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss'
})
export class AddemployeeComponent {


  employee: any = [];
  newemployee = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient,private router: Router) {
  }



  createemployee() {
    this.http.post('http://localhost:3000/employee', this.newemployee).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newemployee.firstName = '';
        this.newemployee.lastName = '';
        //this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }


  deleteUser(id: any) {
    this.http.delete('http://localhost:3000/employee/' + id).subscribe({
      next: (res: any) => {
        //this.getUsers();
      },
      error: (err: any) => {
      },
    });
  }

  goToViewUsers() {
    this.router.navigate(['/employee']);
  }
}



