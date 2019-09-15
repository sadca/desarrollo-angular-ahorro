import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'sadca-angular';
  minHeigth: number;

  constructor() {
    this.minHeigth = 0;
  }

  ngOnInit() {}
}
