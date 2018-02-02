import { Component } from '@angular/core';
import { AppService } from './Shared/service/app.service';

@Component({
  selector: 'sfeir-docker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _appService: AppService) {}

  public get AppService(): AppService {
    return this._appService;
  }
}
