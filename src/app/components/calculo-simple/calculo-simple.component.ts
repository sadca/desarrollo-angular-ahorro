import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculo-simple',
  templateUrl: './calculo-simple.component.html',
  styles: []
})
export class CalculoSimpleComponent implements OnInit {
  @Input() origenes: any[] = [];
  @Input() tarifas: any[] = [];
  tarifa: number;
  precioPotencia: number;
  precioEnergia: number;
  precioAtr: number;
  tipoContrato: number;

  constructor() {}

  ngOnInit() {}

  login(form: NgForm) {
    if (!form.valid) {
      return;
    }
    Swal.fire({
      type: 'info',
      text: 'Calculando...',
      allowOutsideClick: false
    });
    Swal.showLoading();
    // console.log(form);
    // console.log(this.tarifa);
    // console.log(this.precioPotencia);
    // console.log(this.precioEnergia);
    // console.log(this.precioAtr);
    // console.log(this.tipoContrato);
    Swal.close();
    Swal.fire({
      type: 'success',
      text: '¡¡Cargado!!'
    });
  }
}
