import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { UserState, UserStore } from 'src/app/core/state/user/user.store';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss'],
})
export class ThreeComponent implements OnInit {
  users = new Array<UserState>();
  constructor(
    private activeRoute: ActivatedRoute,
    private userStore: UserStore,private router: Router
  ) {}

  ngOnInit(): void {
    this.activeRoute.data.subscribe((data: Data) => {
      this.users = data['users'];
    });
  }

  selectUser(user: UserState) {
    this.userStore.update(user);
    this.router.navigate(['wizard/four'])

  }
}
