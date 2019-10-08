import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FileItem } from '../models/file-items.model';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  webServiceUrl: string;

  constructor(private http: HttpClient) {
    this.webServiceUrl = 'http://localhost:8080/';
  }

  // getOrigenes() {
  //   const url = this.webServiceUrl + 'origenes';
  //   return this.http.get(url);
  // }

  getTarifas() {
    const url = this.webServiceUrl + 'tarifas';
    return this.http.get(url);
  }

  getTiposContrato() {
    const url = this.webServiceUrl + 'tiposcontrato';
    return this.http.get(url);
  }

  getPrecioPotenciaById(id: number) {
    const url = this.webServiceUrl + 'preciopotencia/' + id;
    return this.http.get(url);
  }

  getPrecioEnergiaById(id: number) {
    const url = this.webServiceUrl + 'precioenergia/' + id;
    return this.http.get(url);
  }

  enviarCorreo(nombre: string, correo: string, archivos: FileItem[]) {
    const formdata: FormData = new FormData();
    formdata.append('nombre', nombre);
    formdata.append('correo', correo);
    formdata.append('file1', archivos[0].archivo);
    if (archivos.length > 1) {
      formdata.append('file2', archivos[1].archivo);
    } else {
      formdata.append('file2', archivos[0].archivo);
    }
    if (archivos.length > 2) {
      formdata.append('file3', archivos[2].archivo);
    } else {
      formdata.append('file3', archivos[0].archivo);
    }
    const req = new HttpRequest(
      'POST',
      this.webServiceUrl + 'enviarmail',
      formdata,
      {
        reportProgress: true,
        responseType: 'text'
      }
    );

    return this.http.request(req);
    // const url = this.webServiceUrl + 'enviarmail';
    // const headers = new HttpHeaders().set(
    //   'Content-Type',
    //   'application/x-www-form-urlencoded'
    // );
    // const params = 'nombre=' + nombre + '&correo=' + correo;
    // return this.http.post(url, params, { headers });
    // return this.http.post(url, params);
  }

  enviarArchivo(file: File) {
    const formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest(
      'POST',
      this.webServiceUrl + 'envioarchivo',
      formdata,
      {
        reportProgress: true,
        responseType: 'text'
      }
    );

    return this.http.request(req);
  }
}
