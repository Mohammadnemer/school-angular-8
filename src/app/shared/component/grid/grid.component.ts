import {Component, Input, OnInit} from '@angular/core';
import {ModalServiceService} from '../../service/modal/modal-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() config;
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
