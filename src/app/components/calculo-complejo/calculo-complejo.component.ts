import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { PrecioPotencia } from '../../models/precioPotencia.model';
import { PrecioEnergia } from '../../models/precioEnergia.model';
import { SelectService } from '../../services/select.service';
import { PotenciaConsumida } from '../../models/potenciaConsumida.model';
import { EnergiaConsumida } from '../../models/energiaConsumida.model';

@Component({
  selector: 'app-calculo-complejo',
  templateUrl: './calculo-complejo.component.html',
  styles: []
})
export class CalculoComplejoComponent implements OnInit {
  @Input() tiposContrato: any[] = [];
  @Input() tarifas: any[] = [];
  pPoteUsu: PrecioPotencia = new PrecioPotencia();
  pEnerUsu: PrecioEnergia = new PrecioEnergia();
  pPoteData: PrecioPotencia = new PrecioPotencia();
  pEnerData: PrecioEnergia = new PrecioEnergia();
  potenciaConsumida: PotenciaConsumida = new PotenciaConsumida();
  energiaConsumida: EnergiaConsumida = new EnergiaConsumida();
  tarifa: number;
  tipoContrato: number;
  dias: number;
  peninsulaCanarias = 'peninsula';

  constructor(private selectService: SelectService) {}

  ngOnInit() {}

  cargarPotenciaEnergia(form: NgForm) {
    // Cargamos la potencia
    this.selectService
      .getPrecioPotenciaById(this.tarifa)
      .subscribe((data: PrecioPotencia) => {
        this.pPoteData = data;
        if (this.pPoteData.p1) {
          this.pPoteData.p1 = this.redondeo(Number(this.pPoteData.p1 / 365), 6);
        }
        if (this.pPoteData.p2) {
          this.pPoteData.p2 = this.redondeo(Number(this.pPoteData.p2) / 365, 6);
        }
        if (this.pPoteData.p3) {
          this.pPoteData.p3 = this.redondeo(Number(this.pPoteData.p3) / 365, 6);
        }
        if (this.pPoteData.p4) {
          this.pPoteData.p4 = this.redondeo(Number(this.pPoteData.p4) / 365, 6);
        }
        if (this.pPoteData.p5) {
          this.pPoteData.p5 = this.redondeo(Number(this.pPoteData.p5) / 365, 6);
        }
        if (this.pPoteData.p6) {
          this.pPoteData.p6 = this.redondeo(Number(this.pPoteData.p6) / 365, 6);
        }
      });
    // Cargamos la energia
    this.selectService
      .getPrecioEnergiaById(this.tarifa)
      .subscribe((data: PrecioEnergia) => {
        this.pEnerData = data;
        if (this.pEnerData.p1) {
          this.pEnerData.p1 = this.redondeo(Number(this.pEnerData.p1), 6);
        }
        if (this.pEnerData.p2) {
          this.pEnerData.p2 = this.redondeo(Number(this.pEnerData.p2), 6);
        }
        if (this.pEnerData.p3) {
          this.pEnerData.p3 = this.redondeo(Number(this.pEnerData.p3), 6);
        }
        if (this.pEnerData.p4) {
          this.pEnerData.p4 = this.redondeo(Number(this.pEnerData.p4), 6);
        }
        if (this.pEnerData.p5) {
          this.pEnerData.p5 = this.redondeo(Number(this.pEnerData.p5), 6);
        }
        if (this.pEnerData.p6) {
          this.pEnerData.p6 = this.redondeo(Number(this.pEnerData.p6), 6);
        }
      });

    this.pPoteUsu = new PrecioPotencia();
    this.pEnerUsu = new PrecioEnergia();
    this.potenciaConsumida = new PotenciaConsumida();
    this.energiaConsumida = new EnergiaConsumida();
  }

  private calcularEnergia(): number {
    let pagoEnergiaTotalUsu = 0;
    let pagoEnergiaTotalAhorro = 0;
    if (this.pEnerData.p1) {
      const pagoP1 = this.energiaConsumida.p1 * this.pEnerUsu.p1;
      pagoEnergiaTotalUsu += pagoP1;
      const pagoP1Ahorro = this.energiaConsumida.p1 * this.pEnerData.p1;
      pagoEnergiaTotalAhorro += pagoP1Ahorro;
    }
    if (this.pEnerData.p2) {
      const pagoP2 = this.energiaConsumida.p2 * this.pEnerUsu.p2;
      pagoEnergiaTotalUsu += pagoP2;
      const pagoP2Ahorro = this.energiaConsumida.p2 * this.pEnerData.p2;
      pagoEnergiaTotalAhorro += pagoP2Ahorro;
    }
    if (this.pEnerData.p3) {
      const pagoP3 = this.energiaConsumida.p3 * this.pEnerUsu.p3;
      pagoEnergiaTotalUsu += pagoP3;
      const pagoP3Ahorro = this.energiaConsumida.p3 * this.pEnerData.p3;
      pagoEnergiaTotalAhorro += pagoP3Ahorro;
    }
    if (this.pEnerData.p4) {
      const pagoP4 = this.energiaConsumida.p4 * this.pEnerUsu.p4;
      pagoEnergiaTotalUsu += pagoP4;
      const pagoP4Ahorro = this.energiaConsumida.p4 * this.pEnerData.p4;
      pagoEnergiaTotalAhorro += pagoP4Ahorro;
    }
    if (this.pEnerData.p5) {
      const pagoP5 = this.energiaConsumida.p5 * this.pEnerUsu.p5;
      pagoEnergiaTotalUsu += pagoP5;
      const pagoP5Ahorro = this.energiaConsumida.p5 * this.pEnerData.p5;
      pagoEnergiaTotalAhorro += pagoP5Ahorro;
    }
    if (this.pEnerData.p6) {
      const pagoP6 = this.energiaConsumida.p6 * this.pEnerUsu.p6;
      pagoEnergiaTotalUsu += pagoP6;
      const pagoP6Ahorro = this.energiaConsumida.p6 * this.pEnerData.p6;
      pagoEnergiaTotalAhorro += pagoP6Ahorro;
    }

    let ahorro = 0;
    ahorro = pagoEnergiaTotalUsu - pagoEnergiaTotalAhorro;

    return ahorro;
  }

  private calcularPotencia(): number {
    let pagoPotenciaTotalUsu = 0;
    let pagoPotenciaTotalAhorro = 0;
    if (this.pPoteData.p1) {
      const pagoP1 = this.potenciaConsumida.p1 * this.pPoteUsu.p1 * this.dias;
      pagoPotenciaTotalUsu += pagoP1;
      const pagoP1Ahorro =
        this.potenciaConsumida.p1 * this.pPoteData.p1 * this.dias;
      pagoPotenciaTotalAhorro += pagoP1Ahorro;
    }
    if (this.pPoteData.p2) {
      const pagoP2 = this.potenciaConsumida.p2 * this.pPoteUsu.p2 * this.dias;
      pagoPotenciaTotalUsu += pagoP2;
      const pagoP2Ahorro =
        this.potenciaConsumida.p2 * this.pPoteData.p2 * this.dias;
      pagoPotenciaTotalAhorro += pagoP2Ahorro;
    }
    if (this.pPoteData.p3) {
      const pagoP3 = this.potenciaConsumida.p3 * this.pPoteUsu.p3 * this.dias;
      pagoPotenciaTotalUsu += pagoP3;
      const pagoP3Ahorro =
        this.potenciaConsumida.p3 * this.pPoteData.p3 * this.dias;
      pagoPotenciaTotalAhorro += pagoP3Ahorro;
    }
    if (this.pPoteData.p4) {
      const pagoP4 = this.potenciaConsumida.p4 * this.pPoteUsu.p4 * this.dias;
      pagoPotenciaTotalUsu += pagoP4;
      const pagoP4Ahorro =
        this.potenciaConsumida.p4 * this.pPoteData.p4 * this.dias;
      pagoPotenciaTotalAhorro += pagoP4Ahorro;
    }
    if (this.pPoteData.p5) {
      const pagoP5 = this.potenciaConsumida.p5 * this.pPoteUsu.p5 * this.dias;
      pagoPotenciaTotalUsu += pagoP5;
      const pagoP5Ahorro =
        this.potenciaConsumida.p5 * this.pPoteData.p5 * this.dias;
      pagoPotenciaTotalAhorro += pagoP5Ahorro;
    }
    if (this.pPoteData.p6) {
      const pagoP6 = this.potenciaConsumida.p6 * this.pPoteUsu.p6 * this.dias;
      pagoPotenciaTotalUsu += pagoP6;
      const pagoP6Ahorro =
        this.potenciaConsumida.p6 * this.pPoteData.p6 * this.dias;
      pagoPotenciaTotalAhorro += pagoP6Ahorro;
    }
    let ahorro = pagoPotenciaTotalUsu - pagoPotenciaTotalAhorro;
    ahorro = pagoPotenciaTotalUsu - pagoPotenciaTotalAhorro;

    return ahorro;
  }

  redondeo(numero: any, decimales: number) {
    const flotante = parseFloat(numero);
    const resultado =
      Math.round(flotante * Math.pow(10, decimales)) / Math.pow(10, decimales);
    return resultado;
  }

  calcular(form: NgForm) {
    if (!form.valid) {
      return;
    }
    // TODO: Falta multiplicar por el IVA si es una empresa o no
    // y depende de si esta en Penisula y Baleareas o las Canarias
    console.log(this.peninsulaCanarias);
    let ahorroTotal = 0;
    ahorroTotal = this.redondeo(
      (this.calcularEnergia() + this.calcularPotencia()) * 1.05113,
      2
    );
    let ahorroTotalAnual = 0;
    ahorroTotalAnual = this.redondeo((ahorroTotal * 365) / this.dias, 2);
    const mensaje = 'Este es tu ahorro anual: ' + ahorroTotalAnual + '€';
    Swal.fire({
      type: 'info',
      text: 'Calculando...',
      allowOutsideClick: false
    });
    Swal.showLoading();
    setTimeout(() => {
      Swal.close();
      Swal.fire({
        type: 'success',
        text: mensaje
      });
    }, 1000);
  }
}
