import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['../home/home.component.scss']
})
export class CovidComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];
temp;
  constructor() { }

  ngOnInit() {
    this.temp = localStorage.getItem('temp');
    this.galleryOptions = [
      {
        width: '600px',
        height: '400px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false
      }
    ]


    this.galleryImages = [
      {
        small: '../../assets/covid/15.8/1.jpg',
        medium: '../../assets/covid/15.8/1.jpg',
        big: '../../assets/covid/15.8/1.jpg'
      },
      {
        small: '../../assets/covid/15.8/2.jpg',
        medium: '../../assets/covid/15.8/2.jpg',
        big: '../../assets/covid/15.8/2.jpg'
      },
      {
        small: '../../assets/covid/15.8/3.jpg',
        medium: '../../assets/covid/15.8/3.jpg',
        big: '../../assets/covid/15.8/3.jpg'
      },
      {
        small: '../../assets/covid/15.8/4.jpg',
        medium: '../../assets/covid/15.8/4.jpg',
        big: '../../assets/covid/15.8/4.jpg'
      },
    
    ];

  }
}
