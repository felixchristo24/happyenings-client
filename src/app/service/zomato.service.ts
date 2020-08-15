import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZomatoService {

  constructor(private http: HttpClient) { }


  getTrichyHotels(): Observable<any> {
    return this.http.get(environment.apiBase + '/api/v1/zomato/trichy');
  };


}
