import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthorsService } from '../authors.service';
import { Authors } from '../authors';
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
  
  Auth =new Authors();
  showForm = false;
  constructor(
   
    
    private authser: AuthorsService) { }
  ngOnInit(): void {
 
   

  }
  openModal() {
    this.display = "block";
    this.showForm = true;
  }
  closeModal() {
    this.display = "none";
    this.showForm = false;
    
  }
  

  
  ajoutAuth = () => {

    this.authser.create(this.Auth).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
}
