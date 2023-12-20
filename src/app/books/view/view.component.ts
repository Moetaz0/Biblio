import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Book } from '../book';
import { BookServiceService } from '../book-service.service';
import { Specialities } from 'src/app/specialities/specialities';
import { Publisher } from 'src/app/publisher/publisher';
import { Authors } from 'src/app/authors/authors';
import { SpecialitiesService } from 'src/app/specialities/specialities.service';
import { PublisherService } from 'src/app/publisher/publisher.service';
import { AuthorsService } from 'src/app/authors/authors.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() bookID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  book: Book = new Book()
  Specialities!: Specialities[];
  publisher: Publisher[];
  auth: Authors[];
  showForm = false;
  constructor(
    private bookserv: BookServiceService,
    private specserv: SpecialitiesService,
    private pubser: PublisherService,
    private authser: AuthorsService) {}
  ngOnInit(){
  this.bookserv.find(this.bookID).subscribe(data => {
  this.book = data;
  this.loadspec()
    this.loadPub()
    this.loadAuth()
  });
}
  loadspec() {
    return this.specserv.getAll().subscribe(data =>
      this.Specialities = data),
      (error: any) => console.log(error)
  }
  loadAuth() {
    return this.authser.getAll().subscribe(data =>
      this.auth = data),
      (error: any) => console.log(error)
  }
  loadPub() {
    return this.pubser.getAll().subscribe(data =>
      this.publisher = data),
      (error: any) => console.log(error)
  }
  
  
  
  openModal() {
  this.display = "block";
  }
  closeModal() {
  this.display = "none";
  }
}
  

