import { Component, OnInit } from '@angular/core';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  
    sep:Specialities[]=[]
    constructor(public specs: SpecialitiesService,private router: Router , public authService:AuthService) { }
  ngOnInit(): void {
    this.specs.getAll().subscribe((data:Specialities[])=>this.sep=data);
    
  
  }
  
  filter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();
  
    // Use filter to create a new array based on the filter criteria
    this.sep = this.sep.filter((pub: Specialities) =>
      pub.nomspecialite.toLowerCase().includes(filterValue) 
    );
  }
  deletePublisher(_id:object){
    this.specs.delete(_id).subscribe(() => {
    this.sep = this.sep.filter(item => item._id !== _id);
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
