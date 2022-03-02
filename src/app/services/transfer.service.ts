import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferOperations: any[];

  constructor() {
    this.transferOperations = [];
  }

  get tranferOperations() {
    return this.transferOperations;
  }

  add(transferOperation: any) {
    this.setDateAsNow(transferOperation);

    this.transferOperations.push(transferOperation);
  }

  private setDateAsNow(transferOperation: any) {
    transferOperation.date = new Date();
  }
}
