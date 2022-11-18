import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare const $:any;

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {

@Input () anchura: number
@Input ('etiquetas') captions : boolean
@Output () conseguirAutor = new EventEmitter()

public autor : any;
  constructor() {
    this.autor = {
      name: "Juan Quiroz",
      email: "juan.quiroz1009@gmail.com"
    };
  }

  ngOnInit(): void {
    $('#logo').click(function (e: any) {
      e.preventDefault();
      $('header').css('background', 'green').css('height', '90px');
    });
    $('.galeria').bxSlider({
      mode: 'fade',
      captions: this.captions,
      slideWidth: this.anchura,
    });
  }
  lanzar(event: any){
    this.conseguirAutor.emit(this.autor);
  }
}
