import { Component, OnInit } from '@angular/core';
declare var Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sendEmail() {
    alert('Sorry email server is not available. Please email us at cesar@cesarios.biz.');
  }

}
