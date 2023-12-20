import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef;
  
  
  spe =new Specialities();
  showForm = false;
  display = "none";
  constructor(
   
    
    private spec: SpecialitiesService) { }
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
  

  
  ajoutsep = () => {

    this.spec.create(this.spe).subscribe((data => {
      console.log(data)
      this.closeModal()
      window.location.reload();
    }))
  }
}
