import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'publisher',redirectTo:'publisher/index',pathMatch:'full'},
  { path: 'publisher/index', component: IndexComponent , canActivate: [authGuard] },
  { path: 'publisher/:publisherId/view', component: ViewComponent },
  { path: 'publisher/create', component: CreateComponent },
  { path: 'publisher/:publisherID/edit', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
