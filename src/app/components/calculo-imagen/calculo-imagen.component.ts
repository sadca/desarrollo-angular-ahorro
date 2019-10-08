import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { FileItem } from '../../models/file-items.model';
import { SelectService } from '../../services/select.service';

@Component({
  selector: 'app-calculo-imagen',
  templateUrl: './calculo-imagen.component.html',
  styleUrls: ['./calculo-imagen.component.css']
})
export class CalculoImagenComponent implements OnInit {
  email: string;
  nombre: string;
  archivo: any;
  archivos: FileItem[] = [];
  estaSobreElemento = false;

  constructor(private selectService: SelectService) {}

  ngOnInit() {}

  cargarFichero(evento: any) {
    if (evento.srcElement.files[0]) {
      const archivoNuevo = new FileItem(evento.srcElement.files[0]);
      if (this.archivoPuedeCargarse(evento.srcElement.files[0])) {
        if (this.archivos.length < 3) {
          this.archivos.push(archivoNuevo);
        } else {
          Swal.fire({
            type: 'error',
            text: 'Solo puede añadir 3 archivos.'
          });
        }
      }
    }
  }

  // Validaciones
  private archivoPuedeCargarse(archivo: File): boolean {
    if (
      !this.archivoYaSubido(archivo.name) &&
      this.esImagen(archivo.type) &&
      !this.tamanioSuperado(archivo.size)
    ) {
      return true;
    } else {
      return false;
    }
  }

  private archivoYaSubido(nombreArchivo: string): boolean {
    for (const archivo of this.archivos) {
      // tslint:disable-next-line: triple-equals
      if (archivo.nombreArchivo == nombreArchivo) {
        Swal.fire({
          type: 'error',
          text: 'El archivo ' + nombreArchivo + ' ya está agregado.'
        });
        return true;
      }
    }

    return false;
  }

  private esImagen(tipoArchivo: string): boolean {
    return tipoArchivo === '' || tipoArchivo === undefined
      ? false
      : tipoArchivo.startsWith('image') ||
          tipoArchivo.startsWith('application');
  }

  private tamanioSuperado(tamanio: number): boolean {
    tamanio = tamanio / 1024 / 1024;
    if (tamanio > 8) {
      Swal.fire({
        type: 'error',
        text: 'El archivo excede en tamaño.'
      });
      return true;
    } else {
      return false;
    }
  }

  eliminarArchivo(archivo: FileItem) {
    const i = this.archivos.indexOf(archivo);

    if (i !== -1) {
      this.archivos.splice(i, 1);
    }
  }

  eliminarArchivos() {
    this.archivos = [];
  }

  calcular(form: NgForm) {
    if (!form.valid || this.archivos.length <= 0) {
      if (this.archivos.length <= 0) {
        Swal.fire({
          type: 'error',
          text: 'Debe adjuntar algún archivo',
          allowOutsideClick: false
        });
      }
      return;
    }

    Swal.fire({
      type: 'info',
      text: 'Enviando...',
      allowOutsideClick: false
    });
    Swal.showLoading();

    let envioCorreo: any;
    this.selectService
      .enviarCorreo(this.nombre, this.email, this.archivos)
      .subscribe(
        (data: any) => {
          envioCorreo = data;
          console.log(envioCorreo);
        },
        error => {
          console.error('Ha ocurrido un error enviando el archivo');
          console.error(error);
          Swal.close();
          Swal.fire({
            type: 'error',
            text:
              'No hemos podido enviar sus datos, por favor pruebe de nuevo más tarde. Sentimos las molestias.'
          });
        },
        () => {
          Swal.close();
          Swal.fire({
            type: 'success',
            text:
              '¡¡Enviado!! Contactaremos lo antes posible con usted a través de su correo electrónico.'
          });
        }
      );
  }
}
