import { Component, OnInit, TemplateRef, Input, Output, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-slide-modal',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild('template')
  modalTemplate: TemplateRef<any>;

  @Input()
  animate_speed = 300;
  @Input()
  num_of_panel = 2;
  @Input()
  next_button_text: string = "Next";
  @Input()
  close_button_text: string = "Close";
  @Input()
  active_panel: number = 1;
  @Input()
  slide_title: boolean = false;
  @Output()
  onClose = new EventEmitter();
  @Output()
  onNext = new EventEmitter();

  modalRef: BsModalRef;

  @Input()
  set isVisible(arg: boolean) {
    if((typeof arg == 'string' && arg == 'true') || (typeof arg == 'boolean' && arg)) {
      this.modalRef = this.modalService.show(this.modalTemplate);
    } else {
      this.modalRef.hide();
    }
  }

  ngOnInit(){

  }
  
  openModal(template: ElementRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(
    private modalService: BsModalService,
    ) {}

}