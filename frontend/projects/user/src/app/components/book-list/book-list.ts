import {Component, OnInit} from '@angular/core';
import {BookCard} from '../book-card/book-card';
import {lastValueFrom} from 'rxjs';
import {BookService} from '../../services/book.service';
import {Book} from '../../dto/book';
import {Search} from '../search/search';

@Component({
  selector: 'app-book-list',
  imports: [
    BookCard,
    Search
  ],
  templateUrl: './book-list.html',
  styleUrl: './book-list.scss',
})
export class BookList implements OnInit {

  bookService: BookService;
  allBooks: Book[] = [];
  booksToDisplay: Book[] = [];

  constructor(bookService: BookService) {
    this.bookService = bookService;
  }

  async ngOnInit(): Promise<void> {
    this.allBooks = this.booksToDisplay = await lastValueFrom(this.bookService.getAllBooks());
  }

  filterBooks(searchString: string) {
    const query = searchString.toLowerCase();

    if(this.booksToDisplay) {
      this.booksToDisplay = this.allBooks.filter((book) =>
        book.title.toLowerCase().includes(query) ||
        book.author.toLowerCase().includes(query) ||
        book.description.toLowerCase().includes(query))
    }
  }

}
