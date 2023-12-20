import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { EditComponent } from './edit/edit.component';
import { CreateComponent } from './create/create.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    EditComponent,
    CreateComponent,
    IndexComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class PublisherModule { }
