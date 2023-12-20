import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FilePondComponent } from 'ngx-filepond';
import { Book } from '../book';
import { Specialities } from 'src/app/specialities/specialities';
import { Publisher } from 'src/app/publisher/publisher';
import { Authors } from 'src/app/authors/authors';
import { SpecialitiesService } from 'src/app/specialities/specialities.service';
import { PublisherService } from 'src/app/publisher/publisher.service';
import { BookServiceService } from '../book-service.service';
import { AuthorsService } from 'src/app/authors/authors.service';
import { FilePondOptions } from 'filepond';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() bookID: object;
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
    this.bookserv.find(this.bookID).subscribe(data => {
      this.book = data;
      this.updatePondFiles();
    });

  }
  pondFiles: FilePondOptions["files"]
  updatePondFiles() {
    this.pondFiles = [
      {
        source: this.book.couverture,
        options: {
          type: 'local'
        },
      },
    ];


  }
  pondOptions = {
    class: 'my-filepond',
    multiple: false,
    labelIdle: 'Drop files here',
    acceptedFileTypes: 'image/jpeg, image/png',
    server: {
      load: (source: any, load: any, error: any, progress: any, abort: any,
        headers: any) => {

        if (typeof source === 'string' && source !== '') {
          var myRequest = new Request(source);
          fetch(myRequest).then(function (response) {
            response.blob().then(function (myBlob) {
              load(myBlob);
            });
          });
        }
        else {
          error('Invalid URL');
        }
      },
      process: (fieldName: any, file: any, metadata: any, load: any, error: any,
        progress: any, abort: any) => {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'Ecommerce_cloudinary');
        data.append('cloud_name', 'iset-sfax')
        data.append('public_id', file.name)
        this.bookserv
          .uploadSignature(data)
          .subscribe({
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
            }
          })
      },
      revert: (uniqueFileId: any, load: any, error: any) => {
        error('Error');
        load();

      },
    }
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
  updateBook = () => {

    this.bookserv.update(this.book._id,this.book).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  
  

}
