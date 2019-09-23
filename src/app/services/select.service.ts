import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectService {
  webServiceUrl: string;

  constructor(private http: HttpClient) {
    this.webServiceUrl = 'http://localhost:8080/';
  }

  getOrigenes() {
    const url = this.webServiceUrl + 'origenes';
    return this.http.get(url);
  }

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
}
