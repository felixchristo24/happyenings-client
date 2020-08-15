import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TempratureService {

  constructor(private http: HttpClient) { }


  getTemparture(): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=tiruchirappalli&appid=860f973f3746f59327b91dd80a9298cb&units=metric');
  };

}
