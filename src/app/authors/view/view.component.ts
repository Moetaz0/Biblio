import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Authors } from '../authors';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  @Input() AuthID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";
  
  
  Auth =new Authors();
  
  constructor(
 
    private authser: AuthorsService) {}
  ngOnInit(){
  this.authser.find(this.AuthID).subscribe(data => {
  this.Auth = data;
  
  });
}
  
  openModal() {
  this.display = "block";
  }
  closeModal() {
  this.display = "none";
  }
}
