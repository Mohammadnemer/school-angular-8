import { Component, OnInit } from '@angular/core';
import { RestAdminService } from 'src/app/shared/service/modal/rest-api/rest-admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  configGrid = {};
  constructor(private adminService: RestAdminService) {
  }

  ngOnInit() {
    this.adminService.getConfig().subscribe(data =>{
      this.configGrid["action"] = data["action"];
      this.configGrid["columns"] = data["columns"];
    });
    this.adminService.findAll().subscribe(data => {
      this.configGrid["data"] = data;
    });
  }
  genericFunctions($event){
   this[$event["functionName"]]($event);
  }
  createAdmin($event){
    let data = $event["data"];
    let req ={
      username : data["username"],
      firstName : data["firstName"],
      lastName : data["lastName"],
      phone : data["phone"],
      email : data["email"],
      address : data["address"]
    }
    this.adminService.createAdmin(req).subscribe(data =>{
      this.adminService.findAll().subscribe(data => {
        this.configGrid["data"] = data;
      });
    });
  }
  deleteAdmin($event){
    let data = $event["row"];
    let req =data["id"];
    this.adminService.deleteAdmin(req).subscribe(data => {
      this.adminService.findAll().subscribe(data => {
        this.configGrid["data"] = data;
      });
    });
  }
  updateAdmin($event){
    let data = $event["data"];
    let row = $event["row"];
    let req ={
      username : data["username"],
      firstName : data["firstName"],
      lastName : data["lastName"],
      phone : data["phone"],
      email : data["email"],
      address : data["address"]
    }
    let id =row["id"];
    this.adminService.updateAdmin(req,id).subscribe(data => {
      this.adminService.findAll().subscribe(data => {
        this.configGrid["data"] = data;
      });
    });
  }
}
