import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SelectService } from './services/select.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent implements OnInit {
  public activeLang = 'es';
  title = 'sadca-angular';
  minHeigth: number;

  constructor(
    private translate: TranslateService,
    private selectService: SelectService
  ) {
    this.minHeigth = 0;
    this.translate.setDefaultLang(this.activeLang);

    this.selectService.getToken().subscribe((data: any) => {
      localStorage.setItem('token', data.token);
    });
  }

  ngOnInit() {}
}
