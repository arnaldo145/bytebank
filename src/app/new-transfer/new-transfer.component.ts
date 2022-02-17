import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-transfer',
  templateUrl: './new-transfer.component.html',
  styleUrls: ['./new-transfer.component.scss'],
})
export class NewTransferComponent {
  @Output() onTransfer = new EventEmitter<any>();

  value: number;
  destination: number;

  transfer() {
    const valueToEmit: any = {
      value: this.value,
      destination: this.destination,
    };

    this.onTransfer.emit(valueToEmit);
    this.cleanForm();
  }

  cleanForm() {
    this.value = 0;
    this.destination = 0;
  }
}
