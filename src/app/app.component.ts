import { TransferenciasService } from './services/transferencias.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'bytebank-angular';

  constructor(private service: TransferenciasService) {}

  transferir($event) {
    this.service.adicionar($event);
  }

}
