import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ViewComponent as  viewAutheurs } from '../authors/view/view.component';
import {  CreateComponent as createAutheurs } from '../authors/create/create.component';
import { IndexComponent as indexAutheurs } from '../authors/index/index.component';
import { EditComponent as editAutheurs } from '../authors/edit/edit.component';
import { authGuard } from '../auth/auth.guard';
const routes: Routes = [
  {path:'books',redirectTo:'books/index',pathMatch:'full'},
  { path: 'books/index', component: IndexComponent , canActivate: [authGuard] },
  { path: 'books/:bookId/view', component: ViewComponent },
  { path: 'books/create', component: CreateComponent },
  { path: 'books/:bookID/edit', component: EditComponent },
  {path:'authers',redirectTo:'authers/index',pathMatch:'full'},
  { path: 'authers/index', component: indexAutheurs },
  { path: 'authers/:authersId/view', component: viewAutheurs },
  { path: 'authers/create', component: createAutheurs },
  { path: 'authers/:authersID/edit', component: editAutheurs }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { 
  
}
