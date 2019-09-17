import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculo-complejo',
  templateUrl: './calculo-complejo.component.html',
  styles: []
})
export class CalculoComplejoComponent implements OnInit {
  @Input() origenes: any[] = [];
  @Input() tarifas: any[] = [];

  constructor() { }

  ngOnInit() {
  }

}
