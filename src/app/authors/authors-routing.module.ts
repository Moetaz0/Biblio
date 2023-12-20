import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'authers',redirectTo:'authers/index',pathMatch:'full'},
  { path: 'authers/index', component: IndexComponent , canActivate: [authGuard] },
  { path: 'authers/:authersId/view', component: ViewComponent },
  { path: 'authers/create', component: CreateComponent },
  { path: 'authers/:authersID/edit', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorsRoutingModule { }
