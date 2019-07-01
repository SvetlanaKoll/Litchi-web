import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.scss']
})
export class MainAppComponent implements OnInit {
  slideConfig = {
    speed: 300,
        slidesToShow: 1,
        // autoplay:true,
        adaptiveHeight: true,
        useTransform: true,
        // cssEase: 'cubic-bezier(0.730, 0.040, 0.000, 0.885)',
        arrows: true,
        dots:false,
        responsive: [
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                adaptiveHeight: true,
                arrows:false
                
              }
            }
          ]
                };
        
                
          slideConfig2 = { 
            infinite: true,
            speed: 100,
            dots: false,
            slidesToShow: 8,
            slidesToScroll: 2,
            // autoplay: true,
            arrows: true,
            responsive: [
            {
                breakpoint: 400,
                settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                adaptiveHeight: false,
                arrows: true,
              }
            }
          ]
          };
          slideConfig3 = {
            infinite: true,
            speed: 100,
            dots: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            // autoplay: true,
            arrows:true,
            responsive: [
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    adaptiveHeight: true
                    
                  }
                }
              ]
          }

  constructor() { }

  ngOnInit() {
  }

}
