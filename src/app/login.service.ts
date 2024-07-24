import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = "http://localhost:8080/user"
  
   myUser:User= {
    id: 0,
    name: '',
    email: '',
    password: '',
  }

  constructor(private _http: HttpClient) { }
  
  checkUser(user: User): Observable<any>{
     return this._http.post<User>(this.api + "/checkUser", user)
  }
  addUser(user:User):Observable<any> {
    return this._http.post(this.api+"/addUser", user)
  }
}
