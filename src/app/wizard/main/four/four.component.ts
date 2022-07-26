import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserQuery } from 'src/app/core/state/user/user.query';
import { UserState } from 'src/app/core/state/user/user.store';
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
})
export class FourComponent implements OnInit {
  entity: UserState;
  constructor(private userQuery: UserQuery) {}

  ngOnInit(): void {
    this.entity = this.userQuery.users
  }
}
