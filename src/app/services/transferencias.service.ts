import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  listaTransferencia: any[];

  constructor() {
    this.listaTransferencia = [];
  }

  getTransferencia() {
    return this.listaTransferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTransferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}
