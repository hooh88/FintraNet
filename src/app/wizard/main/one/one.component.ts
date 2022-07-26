import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextPage() {this.router.navigate(['wizard/two'])}
}
