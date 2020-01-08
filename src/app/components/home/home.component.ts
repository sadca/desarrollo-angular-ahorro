import { Component, OnInit } from '@angular/core';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  opcion: string;
  origenes: any[] = [];
  tiposContrato: any[] = [];
  tarifas: any[] = [];

  constructor(private selectService: SelectService) {
    this.opcion = '';

    // this.selectService.getOrigenes().subscribe((data: any[]) => {
    //   this.origenes = data;
    // });

    this.selectService.getTarifas().subscribe((data: any) => {
      this.tarifas = data.tarifas;
    });

    this.selectService.getTiposContrato().subscribe((data: any) => {
      this.tiposContrato = data.tiposContrato;
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
