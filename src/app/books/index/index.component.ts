import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { data } from 'autoprefixer';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  book:Book[]=[]
  constructor(public BookServiceService: BookServiceService,private router: Router,public authService:AuthService) { }
ngOnInit(): void {
  this.BookServiceService.getAll().subscribe((data:Book[])=>this.book=data);
  

}

filter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value.trim().toLowerCase();

  // Use filter to create a new array based on the filter criteria
  this.book = this.book.filter((book: Book) =>
    book.titre.toLowerCase().includes(filterValue) 
  );
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
deleteBook(_id:object){
  this.BookServiceService.delete(_id).subscribe(res => {
  this.book = this.book.filter(item => item._id !== _id);
  console.log('Post deleted successfully!');
  })
  }
  logout() {
    this.authService.doLogout();
    }
 
}
