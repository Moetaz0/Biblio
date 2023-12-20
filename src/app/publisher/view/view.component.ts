import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Publisher } from '../publisher';
import { PublisherService } from '../publisher.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})

export class ViewComponent implements OnInit {
  @Input() pubID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";


  pub = new Publisher();

  constructor(

    private pubs: PublisherService) { }
  ngOnInit() {
    this.pubs.find(this.pubID).subscribe(data => {
      this.pub = data;

    });
  }

  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
    this.pub=new Publisher()
  }
}
