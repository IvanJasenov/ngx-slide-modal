import { Component, OnInit, TemplateRef, Input, Output, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ngx-slide-modal',
  templateUrl: './ngx-slide-modal.component.html',
  styles: ['./ngx-slide-modal.component.css']
})
export class NgxSlideModalComponent implements OnInit {

  @ViewChild('template')
  modalTemplate: TemplateRef<any>;

  @Input()
  animate_speed = 300;
  @Input()
  num_of_panel = 2;
  @Input()
  next_button_text: string;
  @Input()
  close_button_text: string;
  @Input()
  active_panel: number = 1;
  @Input()
  slide_title: boolean = false;
  @Input()
  show_dot: boolean = true;
  @Output()
  onClose = new EventEmitter();
  @Output()
  onNext = new EventEmitter();

  modalRef: BsModalRef;

  @Input()
  set isVisible(arg: boolean) {
    if((typeof arg == 'string' && arg == 'true') || (typeof arg == 'boolean' && arg)) {
      setTimeout(() => this.modalRef = this.modalService.show(this.modalTemplate))
    } else {
      this.modalRef.hide();
    }
  }

  ngOnInit(){
  }

  ngAfterContentChecked() {
    this.next_button_text = "Next";
    this.close_button_text = "Close";
  }
  
  openModal(template: ElementRef<any>) {
    setTimeout(() => this.modalRef = this.modalService.show(template));
  }
  constructor(
    private modalService: BsModalService,
    ) {}


}
