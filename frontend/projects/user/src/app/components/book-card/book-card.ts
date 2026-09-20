import {Component, input} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-book-card',
  imports: [MatCardModule],
  templateUrl: './book-card.html',
  styleUrl: './book-card.scss',
})
export class BookCard {

  title = input.required<string>();
  author = input.required<string>();
  description = input.required<string>();
  releaseDate = input.required<number>();

  borrow() {
    alert('to be implemented');
  }

}
