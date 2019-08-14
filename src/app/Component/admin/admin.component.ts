import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AdminService} from '../../shared/service/api-service/admin/admin.service';
import {User} from './admin';
import {ModalServiceService} from '../../shared/service/modal/modal-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  config: User[];
  constructor(private adminService: AdminService, private modalService: ModalServiceService) {
  }

  ngOnInit() {
    this.adminService.findAll().subscribe(data => {
      this.config = data;
    });
  }

}
