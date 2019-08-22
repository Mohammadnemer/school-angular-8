import { Component, ElementRef, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { ModalServiceService } from '../../service/modal/modal-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']

})
export class ModalComponent implements OnInit {

  @Input() configModal;
  private id : any;
  private data : any;
  @ViewChild("form") fieldData : NgForm;
  @Output() actionFunction = new EventEmitter;
  objShared = {};
  private element: any;
  constructor(private modalService: ModalServiceService, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit(): void {
    let modal = this;
    this.id = this.configModal.id;
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    document.body.appendChild(this.element);

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when component is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.element.remove();
  }

  // open modal
  open(data:any): void {
    this.data = data;
    if(this.configModal.fields.length > 0 && data != undefined){
      this.configModal.fields.forEach(element => {
        element.value = this.data[element.id];
      });
    }
    
    this.element.style.display = 'block';
    this.element.firstElementChild.style.display = 'block';
    document.body.classList.add('jw-modal-open');
  }

  // close modal
  close(): void {
    this.element.style.display = 'none';
    this.element.firstElementChild.style.display = 'none';
    document.body.classList.remove('jw-modal-open');
  }
  closeModal(id: string) {
    this.modalService.close(id);
  }
  save() {
    this.objShared["functionName"] = this.configModal["functionName"];
    this.objShared["data"] = this.fieldData.value;
    this.objShared["form"] = this.fieldData;
    this.objShared["row"]=this.data;
    this.actionFunction.emit(this.objShared);
    this.closeModal(this.id);
    
  }
}
