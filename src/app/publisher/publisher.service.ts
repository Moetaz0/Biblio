import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Publisher } from './publisher';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  private apiURL = 'http://localhost:5000/api'
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json'
  })
  

  
  }
  constructor(private httpClient: HttpClient) { }
  
  getAll(): Observable<any> {
  
  return this.httpClient.get(this.apiURL + '/editeurs/')
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
  
create(pub: Publisher): Observable<any> {

  return this.httpClient.post(this.apiURL + '/editeurs/', pub)
}



find(_id:object): Observable<any> {

  return this.httpClient.get(this.apiURL + '/editeurs/' + _id)
  }
  
  update(_id:object, pub:Publisher): Observable<any> {
  
  return this.httpClient.put(this.apiURL + '/editeurs/' + _id, pub)
  }
  
  delete(_id:object){
  return this.httpClient.delete(this.apiURL + '/editeurs/' + _id)
  }
}
