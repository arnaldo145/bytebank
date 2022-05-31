import { Component, OnInit } from '@angular/core';

import { TransferService } from './../services/transfer.service';
import { Transfer } from '../models/transfer.model';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  transferOperations: any[];

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferService.getAll().subscribe((tranferOperations: Transfer[]) => {
      this.transferOperations = tranferOperations;
    });
  }
}
