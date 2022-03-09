import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  teas: any;

  constructor() { fetch('./assets/files/teas.json').then(res => res.json())
    .then(json => {
      this.teas = json;
    });}

  ngOnInit() {
    
  }
}
