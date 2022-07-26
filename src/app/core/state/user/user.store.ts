import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface UserState {
   id: number;
   firstName: string;
   lastName: string;
   age: number;
   address: string;
   registerDate: string;
}

export function createInitialState(): UserState {
  return {
    id: null,
    firstName: null,
    lastName: null,
    address: null,
    age: null,
    registerDate:null
  };
}
@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'user' })
export class UserStore extends Store<UserState> {
  constructor() {
    super(createInitialState());
  }
}
