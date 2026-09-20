import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [
    FormsModule
  ],
  templateUrl: './search.html',
  styleUrl: './search.scss',
})
export class Search {
  @Output() searchBook = new EventEmitter<string>;
  searchString: string = '';
}
