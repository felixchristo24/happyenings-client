import { Component } from '@angular/core';
import { TwitterService } from '../service/twitter.service';
import { ZomatoService } from '../service/zomato.service';
import { NewsService } from '../service/news.service';
import { TempratureService } from '../service/temprature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  trichyArr = [];
  restaurantsArr = [];
  newsArr = [];
  temp;
  constructor(private twitterService: TwitterService,
    private zomatoService: ZomatoService,
    private tempratureService: TempratureService,
    private newsService: NewsService) {
    this.getTemperature();
    this.getTrichyInformations();
    this.getTrichyRestaurants();
    this.getTrichyNews();
    setInterval(() => {
      this.getTemperature();
      this.getTrichyInformations();
      this.getTrichyRestaurants();
      this.getTrichyNews();
    }, 3000000);


  }


  getTrichyInformations() {
    this.twitterService.getTrichyCoronaInfo().subscribe(
      res => {
        this.trichyArr = res;
        // console.log(this.trichyArr)

      }
    )
  }

  getTrichyRestaurants() {
    this.zomatoService.getTrichyHotels().subscribe(
      res => {
        res.nearby_restaurants.forEach(element => {
          this.restaurantsArr.push(element.restaurant)

        });
      }
    )
  }

  getTemperature() {
    this.tempratureService.getTemparture().subscribe(res => {
      this.temp = res.main.temp;
      localStorage.setItem('temp', this.temp);
    })
  }



  sugesstions() {
    window.location.href = "mailto:happyenings@gmail.com";
  }


  getTrichyNews() {
    this.newsService.getTrichyNews().subscribe(
      res => {
        this.newsArr = res;
      }
    )
  }



  showMap(lat, lng) {
    var url = "https://maps.google.com/?q=" + lat + "," + lng;
    window.open(url);
  }

  twitter(link) {
    window.open(link);

  }
}
