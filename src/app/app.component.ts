import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ngx-slide-modal';
  isVisible = false;

  sayHello(value) {
    console.log(value);
  }

  ngOnInit() {
    setInterval(() => {
      this.isVisible = !this.isVisible;
    }, 2000);
  }
}
