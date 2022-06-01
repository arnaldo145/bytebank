import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Transfer } from '../models/transfer.model';
@Injectable({
  providedIn: 'root',
})
export class TransferService {
  private transferOperations: any[];
  private url: string = 'http://localhost:3000/transfers';

  constructor(private httpClient: HttpClient) {
    this.transferOperations = [];
  }

  get tranferOperations() {
    return this.transferOperations;
  }

  getAll(): Observable<Transfer[]> {
    return this.httpClient.get<Transfer[]>(this.url);
  }

  add(transferOperation: Transfer): Observable<Transfer> {
    this.setDateAsNow(transferOperation);

    return this.httpClient.post<Transfer>(this.url, transferOperation);
  }

  private setDateAsNow(transferOperation: any) {
    transferOperation.date = new Date();
  }
}
