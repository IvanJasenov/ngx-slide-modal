import { Component, OnInit, ViewChild, ElementRef, Input, TemplateRef, Renderer2, Output, ChangeDetectorRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import {  BehaviorSubject } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ngx-slide-modal',
  templateUrl: './ngx-slide-modal.component.html',
  styleUrls: ['./ngx-slide-modal.component.scss']
})
export class NgxSlideModalComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('nextButton')
  nextButton: ElementRef;
  @ViewChild('closeButton')
  closeButton: ElementRef;
  @ViewChild('parent')
  parentEl: ElementRef;
  @Input()
  animate_speed = 300;
  slide_title_property: boolean = false;
  
  @Output()
  onHide = new EventEmitter();
  @Output()
  onNext = new EventEmitter();
  
  panel_num$: BehaviorSubject<number> = new BehaviorSubject(1);
  activePanel$: BehaviorSubject<number> = new BehaviorSubject(1);
  
  parent_width: string;
  parent_transform: string;
  
  @Input()
  set next_button_text(val: string) {
    this.renderer.setProperty(this.nextButton.nativeElement, 'innerHTML', val || 'Next');
  }
  @Input()
  set close_button_text(val: string) {
    this.renderer.setProperty(this.closeButton.nativeElement, 'innerHTML', val || 'Close');
  }
  
  hideModal(event) {
    this.onHide.emit(event);
  }

  @Input()
  set slide_title(val: boolean) {
    if((typeof val == 'string' && val == 'true') || (typeof val == 'boolean' && val)) {
      this.slide_title_property = true;
    } else {
      this.slide_title_property = false;
    }
  }

  @Input()
  set num_of_panel(num: number) {
    this.panel_num$.next(num);
    this.parent_width = `${num * 100}%`;
  }

  incrementActivePanel() {
    this.activePanel$.next(this.activePanel$.value + 1);
    this.onNext.emit(this.activePanel$.value);
  }

  @Input()
  set active_panel(num: number) {
    this.activePanel$.next(num);
  }

  ngAfterContentChecked() {
    this.cd.detectChanges();
    this.activePanel$.subscribe(
      active_panel => {
        let translate_percent = 0;
        for(var i = 1; i <= this.panel_num$.value; i++) {
          if(i == active_panel) break;
          translate_percent -= 100/this.panel_num$.value;    
        }
        this.parent_transform = `translateX(${translate_percent}%)`;
      }
    )
  }

  ngOnInit(){

  }
  
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(
    private modalService: BsModalService,
    private renderer: Renderer2,
    private cd: ChangeDetectorRef,
    ) {}
}
