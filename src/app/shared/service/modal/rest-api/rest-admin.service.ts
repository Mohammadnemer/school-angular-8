import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class RestAdminService {

  constructor(private http:HttpClient) { }
  findAll(){
    return this.http.get('http://localhost:8080/api/admins');
  }
  getConfig(){
    return this.http.get('../../../../../assets/config/admin.json');
  }
  createAdmin(req){
    return this.http.post('http://localhost:8080/api/admins' , req);
  }
  deleteAdmin(id){
    return this.http.delete(`http://localhost:8080/api/admins/${id}`);
  }
  updateAdmin(req,id){
    return this.http.put(`http://localhost:8080/api/admins/${id}`,req);
  }
}
