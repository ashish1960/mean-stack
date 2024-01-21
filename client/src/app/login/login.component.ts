import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  users: any = [];
  newUser = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient,private router: Router) {
  }



  createUser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.newUser.firstName = '';
        this.newUser.lastName = '';
        //this.getUsers();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }


  registraion(){
    this.router.navigate(['/registraion']);
  }
  

  
}
