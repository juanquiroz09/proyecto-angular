import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  public widthSlider: number;
  public anchuraToSlider: any;
  public captions: boolean;
  public autor: any;

  constructor() {
    this.captions = false;
  }

  ngOnInit(): void {
   
  }

  cargarSlider(){
    this.anchuraToSlider = this.widthSlider;
  }
  resetSlider(){
    this.anchuraToSlider = false;
  }
  getAutor(event: any){
    this.autor = event;
  }
}
