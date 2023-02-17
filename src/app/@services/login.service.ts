import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginPost } from '../@modules/login/login.module';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = '/api/login6_8';

  constructor(private http : HttpClient) { }

  jwtLogin(value : LoginPost){
    return this.http.post(this.url + '/jwtLogin', value);
  }
}
