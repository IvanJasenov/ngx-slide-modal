import { NgModule } from '@angular/core';
import { NgxSlideModalComponent } from './ngx-slide-modal.component';
import { ModalModule } from 'ngx-bootstrap';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    NgxSlideModalComponent,
    ModalComponent
  ],
  imports: [
    ModalModule.forRoot(),
    CommonModule
  ],
  exports: [NgxSlideModalComponent]
})
export class NgxSlideModalModule { }
