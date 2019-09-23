import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { SelectService } from '../../services/select.service';
import { PrecioPotencia } from '../../models/precioPotencia.model';
import { PrecioEnergia } from '../../models/precioEnergia.model';

@Component({
  selector: 'app-calculo-simple',
  templateUrl: './calculo-simple.component.html',
  styles: []
})
export class CalculoSimpleComponent implements OnInit {
  @Input() tiposContrato: any[] = [];
  @Input() tarifas: any[] = [];
  pPoteUsu: PrecioPotencia = new PrecioPotencia();
  pEnerUsu: PrecioEnergia = new PrecioEnergia();
  pPoteData: PrecioPotencia = new PrecioPotencia();
  pEnerData: PrecioEnergia = new PrecioEnergia();
  tarifa: number;
  precioAtr: number;
  tipoContrato: number;

  constructor(private selectService: SelectService) {}

  ngOnInit() {}

  cargarPotenciaEnergia() {
    // Cargamos la potencia
    this.selectService
      .getPrecioPotenciaById(this.tarifa)
      .subscribe((data: PrecioPotencia) => {
        this.pPoteData = data;
      });
    // Cargamos la energia
    this.selectService
      .getPrecioEnergiaById(this.tarifa)
      .subscribe((data: PrecioEnergia) => {
        this.pEnerData = data;
      });
    this.pPoteUsu = new PrecioPotencia();
    this.pEnerUsu = new PrecioEnergia();
  }

  /*
    Devuelve un numero que indica
    0 - No ahorro posible
    1 - Ahorro posible
    2 - Ahorro posible o no, depende de valores
  */
  private calcularEnergia(): number {
    let result = 0;

    if (this.pEnerData.p1 < this.pEnerUsu.p1) {
      result = 1;
    } else {
      result = 0;
    }

    if (this.pEnerData.p2 != null) {
      if (this.pEnerData.p2 < this.pEnerUsu.p2) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pEnerData.p3 != null) {
      if (this.pEnerData.p3 < this.pEnerUsu.p3) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pEnerData.p4 != null) {
      if (this.pEnerData.p4 < this.pEnerUsu.p4) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pEnerData.p5 != null) {
      if (this.pEnerData.p5 < this.pEnerUsu.p5) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pEnerData.p6 != null) {
      if (this.pEnerData.p6 < this.pEnerUsu.p6) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    return result;
  }

  /*
    Devuelve un numero que indica
    0 - No ahorro posible
    1 - Ahorro posible
    2 - Ahorro posible o no, depende de valores
  */
  private calcularPotencia(): number {
    let result = 0;

    if (this.pPoteData.p1 != null) {
      if (this.pPoteData.p1 < this.pPoteUsu.p1) {
        result = 1;
      } else {
        result = 0;
      }
    } else {
      if (this.pPoteData.p2 != null) {
        if (this.pPoteData.p2 < this.pPoteUsu.p2) {
          result = 1;
        } else {
          result = 0;
        }
      }
    }

    if (this.pPoteData.p2 != null) {
      if (this.pPoteData.p2 < this.pPoteUsu.p2) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pPoteData.p3 != null) {
      if (this.pPoteData.p3 < this.pPoteUsu.p3) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pPoteData.p4 != null) {
      if (this.pPoteData.p4 < this.pPoteUsu.p4) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pPoteData.p5 != null) {
      if (this.pPoteData.p5 < this.pPoteUsu.p5) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    if (this.pPoteData.p6 != null) {
      if (this.pPoteData.p6 < this.pPoteUsu.p6) {
        if (result === 1) {
          result = 1;
        } else {
          result = 2;
        }
      } else {
        if (result === 0) {
          result = 0;
        } else {
          result = 2;
        }
      }
    }

    return result;
  }

  calcular(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const ahorroEnergia = this.calcularEnergia();
    console.log(ahorroEnergia);
    const ahorroPotencia = this.calcularPotencia();
    console.log(ahorroPotencia);

    Swal.fire({
      type: 'info',
      text: 'Calculando...',
      allowOutsideClick: false
    });
    Swal.showLoading();
    setTimeout(() => {
      if (this.calcularEnergia()) {
        Swal.close();
        Swal.fire({
          type: 'success',
          text: 'Puede ahorrar'
        });
      } else {
        Swal.close();
        Swal.fire({
          type: 'error',
          text: 'No puede ahorrar'
        });
      }
    }, 1000);
  }
}
