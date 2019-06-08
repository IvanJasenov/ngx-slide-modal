import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { ModalModule } from 'ngx-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSlideModalComponent } from './components/ngx-slide-modal/ngx-slide-modal.component';

@NgModule({
  declarations: [MainComponent, NgxSlideModalComponent],
  imports: [
    ModalModule.forRoot(),
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [
    MainComponent,
    BrowserAnimationsModule
  ]
})
export class NgxSlideModalModule { }
