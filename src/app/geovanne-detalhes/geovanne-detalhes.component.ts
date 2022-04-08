import { Component, OnInit } from '@angular/core';
import { listData } from '../list';

@Component({
  selector: 'app-geovanne-detalhes',
  templateUrl: './geovanne-detalhes.component.html',
  styleUrls: ['./geovanne-detalhes.component.css'],
})
export class GeovanneDetalhesComponent implements OnInit {
  list = listData;
  constructor() {}

  ngOnInit() {}
}
