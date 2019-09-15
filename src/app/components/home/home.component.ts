import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  opcion: string;

  constructor() {
    this.opcion = '';
  }

  ngOnInit() {}

  mostrarOpcion(opcion: string) {
    this.opcion = opcion;
  }

  scroll(el: HTMLElement) {
    setTimeout(() => {
      el.scrollIntoView();
    }, 100);
  }
}
