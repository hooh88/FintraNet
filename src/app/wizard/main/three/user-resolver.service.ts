import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/core/state/user/user.store';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<Array<UserState>> {

  constructor(private service : UserService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): UserState[] | Observable<UserState[]> | Promise<UserState[]> {
    return this.service.getUsers();
  }
}
