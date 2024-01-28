import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrl: './editemployee.component.scss'
})
export class EditemployeeComponent implements OnInit{
  isloging=false;
  newemployee = {
    firstName: '',
    lastName: '',
  }

  constructor(
    private http: HttpClient,
    private active: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getEmployeeById(this.active.snapshot.params['id'])
  }

  getEmployeeById(id: string) {
    this.isloging=true;
    this.http.get('http://localhost:3000/employee/' + id).subscribe({
      next: (res: any) => {
       // this.isloging=false;
        console.log('res', res);
        this.newemployee.firstName = res.firstName;
        this.newemployee.lastName = res.lastName;
      },
      error: (error: any) => {
        this.isloging=false;
        console.log('error', error)
      }
    })
  }

  updateUser() {
    this.http.put('http://localhost:3000/employee/' + this.active.snapshot.params['id'], this.newemployee).subscribe({
      next: (res: any) => {
        console.log('res', res);
        this.router.navigate(['/employee'])
      },
      error: (error: any) => {
        console.log('error', error)
      }
    })
  }
}
