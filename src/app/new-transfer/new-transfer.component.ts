import { Component, EventEmitter, Output } from '@angular/core';
import { Transfer } from '../models/transfer.model';
import { TransferService } from '../services/transfer.service';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  constructor(private transferService: TransferService) {}

  transfer() {
    const valueToEmit: Transfer = {
      value: this.value,
      destination: this.destination,
    };

    this.transferService.add(valueToEmit).subscribe(
      (response: Transfer) => {
        alert(
          `Operação para conta ${response.destination} realizada com sucesso`
        );
        this.cleanForm();
      },
      (error) => {
        console.error(error);
      }
    );
  }

  cleanForm() {
    this.value = 0;
    this.destination = 0;
  }
}
