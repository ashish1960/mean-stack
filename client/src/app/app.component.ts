import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  users: any = [];


  newUser = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient){

  }
  getuser(){
    this.http.get('http://localhost:3000/users').subscribe({
      next:(res : any)=>{
        console.log(res);
        this.newUser.firstName='';
        this.newUser.lastName='';
        this.users=res.users;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  
  createuser() {
    this.http.post('http://localhost:3000/users', this.newUser).subscribe({
      next: (res: any) => {
        console.log(res);
        this.getuser();
      },
      error: (err) => {
        console.log(err);
      },
    })
  }

  deleteuser(id:any){
      this.http.delete('http://localhost:3000/users/'+id).subscribe({
        next: (res: any) => {
          console.log(res);
          this.getuser();
          console.log('delete succesfully');
        },
        error: (err) => {
          console.log(err);
        },
      })
  }
   
  getuserById(id:any){
    this.http.get('http://localhost:3000/users'+id).subscribe({
      next:(res : any)=>{
        console.log(res);
        this.newUser.firstName='';
        this.newUser.lastName='';
        this.users=res.users;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
