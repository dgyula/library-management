import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {BookCard} from './components/book-card/book-card';
import {BookList} from './components/book-list/book-list';

@Component({
  selector: 'app-root',
  imports: [BookList],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('user');
}
