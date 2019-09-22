import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calculo-imagen',
  templateUrl: './calculo-imagen.component.html'
})
export class CalculoImagenComponent implements OnInit {
  email: string;
  nombre: string;
  archivo: any;

  constructor() {}

  ngOnInit() {}

  login(form: NgForm) {
    console.log(this.archivo);
    console.log(form);
    if (!form.valid) {
      return;
    }
    Swal.fire({
      type: 'info',
      text: 'Calculando...',
      allowOutsideClick: false
    });
    Swal.showLoading();
    Swal.close();
    Swal.fire({
      type: 'success',
      text: '¡¡Cargado!!'
    });
  }
}
