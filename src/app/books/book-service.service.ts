import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private apiURL = "http://localhost:5000/api";

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/livres/')
  }
  create(book: Book): Observable<any> {

    return this.httpClient.post(this.apiURL + '/livres', book)
  }
  find(_id:object): Observable<any> {

    return this.httpClient.get(this.apiURL + '/livres/' + _id)
    }
    
    update(_id:object, book:Book): Observable<any> {
    
    return this.httpClient.put(this.apiURL + '/livres/' + _id, book)
    }
    
    delete(_id:object){
    return this.httpClient.delete(this.apiURL + '/livres/' + _id)
    }
    uploadSignature(vals: any): Observable<any>{
      let data = vals;
      
      return this.httpClient.post('https://api.cloudinary.com/v1_1/iset-sfax/image/upload',data)
  }
}
