import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registraion',
 
  templateUrl: './registraion.component.html',
  styleUrl: './registraion.component.scss'
})
export class RegistraionComponent {

  user: any = [];

  newUser = {
    email: '',
    password: '',
  }

  constructor(private http: HttpClient,private router: Router) {
  }

  registerusers() {
    this.http.post('http://localhost:3000/user/register',this.newUser).subscribe({
      next:(res:any)=>{
        console.log(res);
        this.newUser.email='';
        this.newUser.password='';
        this.user=res.user;
        this.router.navigate(['/login']);
      },
      error:(err)=>{
        console.log(err);
      },
    })
  }
  login(){
    this.router.navigate(['/login']);
  }

}
