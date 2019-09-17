import { Component, OnInit } from '@angular/core';
import { OrigenService } from '../../services/origen.service';
import { Origen } from '../../models/origen.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  opcion: string;
  origenes: any[] = [];
  tarifas: any[] = [];

  constructor(private origenService: OrigenService) {
    this.opcion = '';

    this.origenService.getOrigenes().subscribe((data: any[]) => {
      console.log(data);
      this.origenes = data;
    });

    this.origenService.getTarifas().subscribe((data: any[]) => {
      console.log(data);
      this.tarifas = data;
    });
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
