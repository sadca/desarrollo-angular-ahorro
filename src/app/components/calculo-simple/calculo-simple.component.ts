import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-calculo-simple',
  templateUrl: './calculo-simple.component.html',
  styles: []
})
export class CalculoSimpleComponent implements OnInit {
  @Input() origenes: any[] = [];
  @Input() tarifas: any[] = [];

  constructor() {}

  ngOnInit() {}
}
