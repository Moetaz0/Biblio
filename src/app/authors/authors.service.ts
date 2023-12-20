import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Authors } from './authors';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiURL = "http://localhost:5000/api";
httpOptions = {
headers: new HttpHeaders({
'Content-Type': 'application/json'
})



}
constructor(private httpClient: HttpClient) { }
create(auth: Authors): Observable<any> {

  return this.httpClient.post(this.apiURL + '/auteurs/', auth)
}
getAll(): Observable<any> {

return this.httpClient.get(this.apiURL+ '/auteurs/')
.pipe(
catchError(this.errorHandler)
)
}
errorHandler(error:any) {
let errorMessage = '';
if(error.error instanceof ErrorEvent) {
errorMessage = error.error.message;
} else {
errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
}
return throwError(errorMessage);
}

find(_id:object): Observable<any> {

  return this.httpClient.get(this.apiURL + '/auteurs/' + _id)
  }
  
  update(_id:object, auth:Authors): Observable<any> {
  
  return this.httpClient.put(this.apiURL + '/auteurs/' + _id, auth)
  }
  
  delete(_id:object){
  return this.httpClient.delete(this.apiURL + '/auteurs/' + _id)
  }
}
