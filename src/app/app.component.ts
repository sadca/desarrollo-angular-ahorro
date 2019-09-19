import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  public activeLang = 'es';
  title = 'sadca-angular';
  minHeigth: number;

  constructor(private translate: TranslateService) {
    this.minHeigth = 0;
    this.translate.setDefaultLang(this.activeLang);
  }

  ngOnInit() {}
}
