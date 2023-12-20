import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FilePondComponent } from 'ngx-filepond';
import { Publisher } from '../publisher';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  
  
  pub =new Publisher();
  showForm = false;
  display = "none";
  constructor(
   
    
    private pubser: PublisherService) { }
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
  

  
  ajoutpub = () => {

    this.pubser.create(this.pub).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
}
