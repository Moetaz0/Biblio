import { Component, NgModule, OnInit } from '@angular/core';
import { Publisher } from '../publisher';
import { PublisherService } from '../publisher.service';
import { Router } from '@angular/router';
import { CreateComponent } from '../create/create.component';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  
  pub:Publisher[]=[]
  constructor(public pubserv: PublisherService,private router: Router , public authService:AuthService) { }
ngOnInit(): void {
  this.pubserv.getAll().subscribe((data:Publisher[])=>this.pub=data);
  

}

filter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

  // Use filter to create a new array based on the filter criteria
  this.pub = this.pub.filter((pub: Publisher) =>
    pub.maisonedit.toLowerCase().includes(filterValue) 
  );
}
deletePublisher(_id:object){
  this.pubserv.delete(_id).subscribe(() => {
  this.pub = this.pub.filter(item => item._id !== _id);
  console.log('Post deleted successfully!');
  })
  }
  navigateToBooks() {
    this.router.navigate(['/books/index']);
  }
  navigateToAuthors() {
    this.router.navigate(['/authers/index']);
  }
  navigateToPublisher() {
    this.router.navigate(['/publisher/index']);
    }
    navigateToSpec() {
      this.router.navigate(['/spec/index']);
      }
      logout() {
        this.authService.doLogout();
        }
}
