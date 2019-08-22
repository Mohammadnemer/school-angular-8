import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../../shared/service/modal/modal-service.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {
  }
}
