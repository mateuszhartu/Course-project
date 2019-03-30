import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Output() choiceSelect = new EventEmitter<string>();

  onSelect(choice: string) {
    this.choiceSelect.emit(choice);
  }

  constructor() { }

  ngOnInit() {
  }

}
