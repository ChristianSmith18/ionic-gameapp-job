import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  cards = [
    {
      title: 'Parejas Tradicionales',
    },
    {
      title: 'Parejas Tradicionales',
    },
    {
      title: 'Parejas Extremas',
    },
    {
      title: 'Parejas Extremas',
    },
    {
      title: 'Beso con Lengua',
    },
    {
      title: 'Beso con Lengua',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
