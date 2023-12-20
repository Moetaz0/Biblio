import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Publisher } from '../publisher';
import { FilePondComponent } from 'ngx-filepond';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() pubID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  display = "none";

  pub =new Publisher();
  
  constructor(

    private pubs: PublisherService) { }
  ngOnInit(): void {

    this.pubs.find(this.pubID).subscribe(data => {
      this.pub = data;
    });

  }
  openModal() {
    this.display = "block";
 
  }
  closeModal() {
    this.display = "none";
    

  }

  updatePub = () => {

    this.pubs.update(this.pub._id,this.pub).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  
}
