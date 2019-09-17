import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Origen } from '../models/origen.model';

@Injectable({
  providedIn: 'root'
})
export class OrigenService {
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
}
