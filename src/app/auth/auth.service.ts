import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseurl = "http://localhost:5000/api/users"
  constructor(private http: HttpClient, public router: Router) { }
  // Sign-up
  signUp(user: User): Observable<any> {
    return this.http.post(this.baseurl + '/', user);
  }
  // Sign-in
  signIn(user: any) {
    return this.http
      .post<any>(this.baseurl + "/login/", user)
      .subscribe({
        next: (res: any) => {
          localStorage.setItem('access_token', res.token);
localStorage.setItem('refresh_token', res.refreshToken);
        },
        error: (e: any) => {
          console.log(e);
          Swal.fire(
            {
              title:"Email or Password invalid",
              text:"Check and try again",
              icon:'error',
              width:600

              
            })
        },
        complete: () => {
          this.router.navigate(['books']);
        }
      });
  }
  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {

      3
      this.router.navigate(['']);
    }
  }
  refreshToken(token: string) {
    const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(`${this.baseurl}/refreshToken/`, {
    refreshToken: token
    }, httpOptions);
    }

}
