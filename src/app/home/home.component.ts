import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  slides = [
    { image: 'assets/c92020e0-e209-403d-a334-2b544b03a9d4.jpg', caption: 'Slide 1' },
    { image: 'assets/923031_4887294020861_457011659_n.jpg', caption: 'Slide 2' }
  ];

  carouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    slide: 1,
    speed: 400,
    animation: 'lazy',
    point: {
      visible: true
    },
    load: 2,
    touch: true,
    easing: 'ease'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
