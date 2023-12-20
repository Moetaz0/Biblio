import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Authors } from '../authors';
import { FilePondComponent } from 'ngx-filepond';
import { AuthorsService } from '../authors.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() AuthID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  @ViewChild('myPond') myPond: FilePondComponent;
  display = "none";

  Auth =new Authors();
  
  constructor(

    private authser: AuthorsService) { }
  ngOnInit(): void {

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

  updateAuth = () => {

    this.authser.update(this.Auth._id,this.Auth).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  
}
