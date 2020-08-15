import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { NgModule } from '@angular/core';
import { TwitterService } from './service/twitter.service';
import { ZomatoService } from './service/zomato.service';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './service/news.service';
import { TempratureService } from './service/temprature.service';
import { HomeComponent } from './home/home.component';
import { CovidComponent } from './covid/covid.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CovidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxGalleryModule
  ],
  providers: [TwitterService, ZomatoService, NewsService, TempratureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
