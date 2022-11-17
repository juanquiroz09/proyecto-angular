import { Component, OnInit } from '@angular/core';

declare const $:any;
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('#logo').click(function (e: any) {
      e.preventDefault();
      $('header').css('background', 'green').css('height', '90px');
    });
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 400,
    });
  }
}
