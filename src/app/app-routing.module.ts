import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { IndexComponent } from './books/index/index.component';
import { IndexComponent as Spec } from './specialities/index/index.component';
import { IndexComponent as Auth } from './authors/index/index.component';
import { IndexComponent as Pub } from './publisher/index/index.component';
import { authGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'books/index', component: IndexComponent , canActivate: [authGuard] },
  { path: 'spec/index', component: Spec, canActivate: [authGuard]  },
  { path: 'authers/index', component: Auth , canActivate: [authGuard] },
  { path: 'publisher/index', component: Pub , canActivate: [authGuard] },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
