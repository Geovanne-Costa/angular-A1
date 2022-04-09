import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { listData } from '../list';

@Component({
  selector: 'app-geovanne-detalhes',
  templateUrl: './geovanne-detalhes.component.html',
  styleUrls: ['./geovanne-detalhes.component.css'],
})
export class GeovanneDetalhesComponent implements OnInit {
  item;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.item = listData[params.get('index')];
    });
  }
}
