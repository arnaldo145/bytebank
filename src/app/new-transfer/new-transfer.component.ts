import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private transferService: TransferService,
    private router: Router,) {}

  transfer() {
    const valueToEmit: Transfer = {
      value: this.value,
      destination: this.destination,
    };

    this.transferService.add(valueToEmit).subscribe(
      (response: Transfer) => {
        this.router.navigateByUrl('extract');
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
