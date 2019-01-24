import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserListService {

  baseUsersUrl = 'https://api.github.com/users';

  constructor(
    private http: HttpClient
  ) { }

  // sanye 17909038
  // wagner 17071403
  // leandro 31046754

  getUsers() {
    return this.http.get(`${this.baseUsersUrl}?since=17071403`);
  }

  getUserInfo(login: string) {
    return this.http.get(`${this.baseUsersUrl}/${login}`);
  }

  getUserRepos(login: string) {
    return this.http.get(`${this.baseUsersUrl}/${login}/repos`);
  }
}
