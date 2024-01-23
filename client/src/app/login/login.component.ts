import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  user: any = [];
  newUser = {
    email: '',
    password: '',
  }

  constructor(private http: HttpClient,private router: Router) {
  }


  login(){
    this.http.post('http://localhost:3000/user/login',this.newUser).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.newUser.email='';
        this.newUser.password='';
        this.user=res.user;
        
      },
      error:(err)=>{
        console.log(err);
      },
    })
  }




  registraion(){
    this.router.navigate(['/registraion']);
  }
  

  
}
