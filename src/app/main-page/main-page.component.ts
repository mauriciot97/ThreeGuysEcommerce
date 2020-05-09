import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  imgList: any[] = [];


  constructor() {
    this.imgList = [
      { id: 1, path: "./assets/threeguys.png" },
      { id: 2, path: "./assets/logo.jpeg" },
      { id: 3, path: "./assets/bike1.jpeg" }
    ]
    
  }

  ngOnInit() {
    
  }

}
