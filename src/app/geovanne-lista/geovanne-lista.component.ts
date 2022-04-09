import { Component, OnInit } from '@angular/core';
import { listData } from '../list';

@Component({
  selector: 'app-geovanne-lista',
  templateUrl: './geovanne-lista.component.html',
  styleUrls: ['./geovanne-lista.component.css'],
})
export class GeovanneListaComponent implements OnInit {
  list = listData;

  newItem: any;

  addToList() {
    if (this.newItem == '') {
    } else {
      this.list.push(this.newItem);
      this.newItem = '';
    }
  }

  deleteTask(index) {
    this.list.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
