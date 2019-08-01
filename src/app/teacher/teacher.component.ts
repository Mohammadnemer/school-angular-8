import { Component, OnInit } from '@angular/core';
import { ModalServiceService } from '../shared/service/modal-service.service'

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {
  }
  openModal(id: string) {
    this.modalService.open(id);
}

closeModal(id: string) {
    this.modalService.close(id);
}
}
