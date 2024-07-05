
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent {
  @Output() searchChange: EventEmitter<string> = new EventEmitter<string>();

  onSearchChange(event: any) {
    const searchTerm = event.target.value;
    this.searchChange.emit(searchTerm);
  }
}