import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() {}

  ngOnInit() {
    this.items = [
      { label: 'Upload Image', routerLink: 'one' },
      { label: 'Step 2', routerLink: 'two' },
      { label: 'Step 3', routerLink: 'three' },
      { label: 'Step 4', routerLink: 'four' },
    ];
  }
}
