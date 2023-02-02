import { Injectable } from '@angular/core';
import { Resolve} from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherapiService } from '../services/weatherapi.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherResolverResolver implements Resolve<any> {

  constructor(private weather_api:WeatherapiService){}
  resolve(): Observable<any> {
    return this.weather_api.GetDataFromDB();
  }
}
