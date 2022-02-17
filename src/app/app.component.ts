import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferOperations: any[] = [];

  transfer($event){
    const transferOperation: any = {...$event, date: new Date() };
    this.transferOperations.push(transferOperation);
  }
}
