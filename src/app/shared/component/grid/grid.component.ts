import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ModalServiceService } from '../../service/modal/modal-service.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() configGrid;
  @Output() actionFunctions = new EventEmitter;

  constructor(private modalService: ModalServiceService) { }

  ngOnInit() {
  }
  openModal(id: string , data:any) {
    this.modalService.open(id,data);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }
  genericFunction($event) {
    this.actionFunctions.emit($event);
  }
}
