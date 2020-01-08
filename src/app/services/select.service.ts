import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { FileItem } from '../models/file-items.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  webServiceUrl: string;

  constructor(private http: HttpClient) {
    // this.webServiceUrl = 'http://localhost:8080/';
    this.webServiceUrl = 'http://localhost:3000/';
  }

  // getOrigenes() {
  //   const url = this.webServiceUrl + 'origenes';
  //   return this.http.get(url);
  // }

  getToken() {
    const url = this.webServiceUrl + 'token';
    return this.http.post(url, {});
  }

  private getTokenUrl() {
    const url = this.webServiceUrl + 'token';
    this.http.post(url, {}).subscribe((data: any) => {
      localStorage.setItem('token', data.token);
    });
  }

  getTarifas() {
    const url = this.webServiceUrl + 'tarifas';
    if (!localStorage.getItem('token')) {
      this.getTokenUrl();
    }
    const headers: HttpHeaders = new HttpHeaders({
      token: localStorage.getItem('token')
    });
    return this.http.get(url, { headers });
  }

  getTiposContrato() {
    const url = this.webServiceUrl + 'tipos_contrato';
    const headers: HttpHeaders = new HttpHeaders({
      token: localStorage.getItem('token')
    });
    return this.http.get(url, { headers });
  }

  getPrecioPotenciaById(id: number) {
    const url = this.webServiceUrl + 'precio_potencia/' + id;
    if (!localStorage.getItem('token')) {
      this.getTokenUrl();
    }
    const headers: HttpHeaders = new HttpHeaders({
      token: localStorage.getItem('token')
    });
    return this.http
      .get(url, { headers })
      .pipe(map((res: any) => res.precioPotencia));
  }

  getPrecioEnergiaById(id: number) {
    const url = this.webServiceUrl + 'precio_energia/' + id;
    if (!localStorage.getItem('token')) {
      this.getTokenUrl();
    }
    const headers: HttpHeaders = new HttpHeaders({
      token: localStorage.getItem('token')
    });
    return this.http
      .get(url, { headers })
      .pipe(map((res: any) => res.precioEnergia));
  }

  enviarCorreo(nombre: string, correo: string, archivos: FileItem[]) {
    const formdata: FormData = new FormData();
    // formdata.append('nombre', nombre);
    // formdata.append('correo', correo);
    formdata.append('archivo', archivos[0].archivo);
    if (archivos.length > 1) {
      formdata.append('archivo2', archivos[1].archivo);
    } else {
      formdata.append('archivo2', archivos[0].archivo);
    }
    if (archivos.length > 2) {
      formdata.append('archivo3', archivos[2].archivo);
    } else {
      formdata.append('archivo3', archivos[0].archivo);
    }
    if (!localStorage.getItem('token')) {
      this.getTokenUrl();
    }
    const headers: HttpHeaders = new HttpHeaders({
      token: localStorage.getItem('token')
    });
    const req = new HttpRequest(
      'POST',
      `${this.webServiceUrl}mail/${nombre}/${correo}`,
      formdata,
      {
        headers,
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
