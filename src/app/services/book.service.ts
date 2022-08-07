import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  bookApi = "https://api.itbook.store/1.0/search/angular";

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private httpClient: HttpClient) { }

  //Retorna a lista de usuários (READ)
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(this.bookApi)
  }
}
