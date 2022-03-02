import { TransferService } from './../services/transfer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-extract',
  templateUrl: './extract.component.html',
  styleUrls: ['./extract.component.scss'],
})
export class ExtractComponent implements OnInit {
  transferOperations: any[];

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.transferOperations = this.transferService.tranferOperations;
  }
}
