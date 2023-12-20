import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpecialitiesRoutingModule } from './specialities-routing.module';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ViewComponent,
    EditComponent,
    IndexComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    SpecialitiesRoutingModule,
    FormsModule,
    RouterModule,
  ]
})
export class SpecialitiesModule { }
