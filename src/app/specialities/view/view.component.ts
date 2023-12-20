import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Specialities } from '../specialities';
import { SpecialitiesService } from '../specialities.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Input() speID: object;
  @ViewChild('myModal') myModal!: ElementRef;
  display = "none";


  spe = new Specialities();

  constructor(

    private spec: SpecialitiesService) { }
  ngOnInit() {
    this.spec.find(this.speID).subscribe(data => {
      this.spe = data;

    });
  }

  openModal() {
    this.display = "block";
  }
  closeModal() {
    this.display = "none";
    this.spe=new Specialities()
  }

}
