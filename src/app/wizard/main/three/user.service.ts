import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserState } from 'src/app/core/state/user/user.store';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers():Observable<Array<UserState>> {
    return this.http.get<Array<UserState>>('assets/mock-users.json');
  }
}
