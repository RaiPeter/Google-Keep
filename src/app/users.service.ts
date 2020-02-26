import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from 'users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  url:string="http://localhost:3000/users";

fetchData():Observable<Users[]>{
  return this.http.get<Users[]>(this.url)  
}
}

