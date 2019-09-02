import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestLoginService {

  constructor(private http : HttpClient) { }
  login(req){
    return this.http.post('http://localhost:8080/api/login' , req);
  }
}
