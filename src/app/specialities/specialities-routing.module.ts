import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { authGuard } from '../auth/auth.guard';

const routes: Routes = [
  {path:'spec',redirectTo:'spec/index',pathMatch:'full'},
  { path: 'spec/index', component: IndexComponent, canActivate: [authGuard]  },
  { path: 'spec/:specId/view', component: ViewComponent },
  { path: 'spec/create', component: CreateComponent },
  { path: 'spec/:specID/edit', component: EditComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpecialitiesRoutingModule { }
