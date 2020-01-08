export class PrecioPotencia {
  origen: number;
  p1: number;
  p2: number;
  p3: number;
  p4: number;
  p5: number;
  p6: number;
  tarifa: number;

  constructor() {}

  setPrecioPotencia(data: any) {
    this.p1 = data.P1;
    this.p2 = data.P2;
    this.p3 = data.P3;
    this.p4 = data.P4;
    this.p5 = data.P5;
    this.p6 = data.P6;
    this.tarifa = data.Tarifa;
    this.origen = data.Origen;
  }
}
