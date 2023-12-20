import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { User } from '../user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
navigateToLogin() {
  this.router.navigate(['']);
}
  constructor(private authserv:AuthService,private router:Router){}
  user:User=new User()
  Ajoutuser=()=>{
  this.authserv.signUp(this.user).subscribe((data=>{
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your account has been saved",
      showConfirmButton: false,
      timer: 3000,
      width:100
    });
  this.router.navigate(['']);
  }))}
}
