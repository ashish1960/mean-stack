import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'client';

  employee: any = [];


  newemployee = {
    firstName: '',
    lastName: '',
  }

  constructor(private http: HttpClient){

  }
  getuser(){
    this.http.get('http://localhost:3000/employee').subscribe({
      next:(res : any)=>{
        console.log(res);
        this.newemployee.firstName='';
        this.newemployee.lastName='';
        this.employee=res.users;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

  
  createmployee() {
    this.http.post('http://localhost:3000/employee', this.newemployee).subscribe({
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
      this.http.delete('http://localhost:3000/employee/'+id).subscribe({
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
    this.http.get('http://localhost:3000/employee'+id).subscribe({
      next:(res : any)=>{
        console.log(res);
        this.newemployee.firstName='';
        this.newemployee.lastName='';
        this.newemployee=res.users;
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }

}
