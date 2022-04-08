import { Component, OnInit } from '@angular/core';
import { listData } from '../list';

@Component({
  selector: 'app-geovanne-lista',
  templateUrl: './geovanne-lista.component.html',
  styleUrls: ['./geovanne-lista.component.css'],
})
export class GeovanneListaComponent implements OnInit {
  list = listData;
  constructor() {}

  ngOnInit() {}
}
