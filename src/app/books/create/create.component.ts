import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../book';
import { Specialities } from 'src/app/specialities/specialities';
import { BookServiceService } from '../book-service.service';
import { SpecialitiesService } from 'src/app/specialities/specialities.service';
import { PublisherService } from 'src/app/publisher/publisher.service';
import { Publisher } from 'src/app/publisher/publisher';
import { AuthorsService } from 'src/app/authors/authors.service';
import { Authors } from 'src/app/authors/authors';
import { FilePondComponent } from 'ngx-filepond';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
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
    private authser: AuthorsService) { }
  ngOnInit(): void {
    this.loadspec()
    this.loadPub()
    this.loadAuth()

  }
  openModal() {
    this.display = "block";
    this.showForm = true;
  }
  closeModal() {
    this.display = "none";
    this.showForm = false;
    this.book = new Book();
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
  ajoutBook = () => {

    this.bookserv.create(this.book).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      process: (
        fieldName: any,
        file: any,
        metadata: any,
        load: any,
        error: (error: any) => void, // Specify the type for the error parameter
        progress: any,
        abort: any
      ) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'iset-sfax');
        data.append('public_id', file.name);
  
        this.bookserv.uploadSignature(data).subscribe({
          next: (res) => {
            this.book.couverture = res.url;
            load(res);
          },
          error: (e) => {
            console.log(e);
            error(e);
            return () => {
              abort();
            };
          },
          complete: () => {
            console.log('done');
            return () => {
              abort();
            };
          },
        });
      },
      revert: (uniqueFileId: any, load: any, error: any) => {
        error('Error');
        load();
      },
    },
  };
  
}
