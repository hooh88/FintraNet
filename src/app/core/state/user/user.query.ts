import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserState, UserStore } from './user.store';
@Injectable({
  providedIn: 'root'
})
export class UserQuery extends Query<UserState> {
  //allState$ = this.select();

    // Returns { name, age }
  //user$ = this.select(['id','firstName', 'lastName', 'address', 'registerDate' , 'age']);


  constructor(protected override store: UserStore) {
    super(store);
  }
  get users(){
    return this.getValue()
  }
}
