import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {lastValueFrom, Observable} from 'rxjs';
import {Book} from '../dto/book';

@Injectable({
  providedIn: 'root'
})
export class BookService implements OnInit {

  allBooks: Book[] = [];

  private readonly baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    // this.allBooks = await lastValueFrom(this.http.get<Book[]>(`${this.baseUrl}/list`));
  }

  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.baseUrl}/list`);
  }
}
