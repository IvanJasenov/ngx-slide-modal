import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxSlideModalModule } from './modules/ngx-slide-modal/ngx-slide-modal.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgxSlideModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
