import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-nova-transferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

    @Output() aoTransferir = new EventEmitter<any>();

    valor: number | string;

    destino: number | string;

    transferir() {
        console.log('Solicitada, nova transferencia para a conta: ' + this.destino + ' valor: ' + this.valor);
        const valorEmitir = {valor: this.valor, destino: this.destino}
        this.aoTransferir.emit(valorEmitir);

        this.limparCampos();
    }

    limparCampos() {
        this.valor = '';
        this.destino = '';
    }
}
