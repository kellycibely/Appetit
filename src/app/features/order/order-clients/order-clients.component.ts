import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as simpleClients from '../../../fakeResponse/simpleClients.json';

@Component({
  selector: 'app-order-clients',
  templateUrl: './order-clients.component.html',
  styleUrls: ['./order-clients.component.css']
})
export class OrderClientsComponent implements OnInit {

  @Output() _clientSelected = new EventEmitter();

  clientsList: any = (simpleClients as any).default;

  clientSelected: Array<any> = [];
  term: string;
  oldList: any;

  constructor() {
    const oldsimpleClientList = this.clientsList;
    this.oldList = oldsimpleClientList;
   }

  ngOnInit(): void {
  }

  add(client) {
    if (this.clientSelected.length < 1) {
      this.clientSelected.push(client);
    }
    else {
      const checkClient = this.clientSelected.filter(c => c.id === client.id)
      if (checkClient.length < 1) {
        this.clientSelected.push(client);
      }
    }

    this.clientsList.forEach(client => {
      this.clientSelected.forEach(selected => {
        if (client.id == selected.id) {
          client.imageCheck = "../../../assets/icons/checked.svg";
        }
      });
    });
  }

  next() {
    this._clientSelected.emit(this.clientSelected); 
  }

  loadList() {
    const clientList = this.clientsList.filter(c => c.name.toLowerCase() === this.term.toLowerCase())
    if (clientList.length >= 1) {
      this.clientsList = clientList;
    }
    if (this.term == "") {
      this.clientsList = this.oldList;
    }
  }

}
