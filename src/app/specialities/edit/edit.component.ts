import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() speID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";

  spe =new Specialities();
  
  constructor(

    private spes: SpecialitiesService) { }
  ngOnInit(): void {

    this.spes.find(this.speID).subscribe(data => {
      this.spe = data;
    });

  }
  openModal() {
    this.display = "block";
 
  }
  closeModal() {
    this.display = "none";
    

  }

  updatespe = () => {

    this.spes.update(this.spe._id,this.spe).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
  

}
