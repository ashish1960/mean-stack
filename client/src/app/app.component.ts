import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HttpClientModule,FormsModule],
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

}
