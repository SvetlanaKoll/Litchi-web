import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'footer-app',
  templateUrl: './footer-app.component.html',
  styleUrls: ['./footer-app.component.scss']
})
export class FooterAppComponent implements OnInit {
  mailIsSent = false;
  userEmail = '';
  constructor() { }

  ngOnInit() {

  }
  sendEmail() {
    console.log(this.userEmail);
    this.mailIsSent = true;
  }
}
