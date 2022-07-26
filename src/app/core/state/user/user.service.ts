import { UserState, UserStore } from './user.store';

export class UserService {
  constructor(private userStore: UserStore) {}

  updateUser(user: UserState) {
    this.userStore.update({
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      address: user.address,
      age: user.age,
      registerDate: user.registerDate,
    });
  }
}
