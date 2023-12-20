import { Component, OnInit } from '@angular/core';
import { Authors } from '../authors';
import { AuthorsService } from '../authors.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
  auth:Authors[]=[]
  constructor(public AuthS: AuthorsService,private router: Router,public authService: AuthService) { }
ngOnInit(): void {
  this.AuthS.getAll().subscribe((data:Authors[])=>this.auth=data);
  

}
logout() {
  this.authService.doLogout();
  }

filter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

  // Use filter to create a new array based on the filter criteria
  this.auth = this.auth.filter((auth: Authors) =>
    auth.nomauteur.toLowerCase().includes(filterValue) 
  );
}
deleteAutheurs(_id:object){
  this.AuthS.delete(_id).subscribe(res => {
  this.auth = this.auth.filter(item => item._id !== _id);
  console.log('Post deleted successfully!');
  })
  }
  navigateToBooks() {
    this.router.navigate(['/books/index']);
  }
  navigateToPublisher() {
    this.router.navigate(['/publisher/index']);
  }
  navigateToAuth() {
    this.router.navigate(['/authers/index']);
  }
  navigateToSpec() {
    this.router.navigate(['/spec/index']);
  }
}
