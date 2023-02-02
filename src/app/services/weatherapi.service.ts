import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { WeatherData } from '../model/WeatherModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherapiService { 
  weatherforcast:Array <WeatherData> = [];

  //Live Weather API
  api_key:any = 'cb062e46c85b04a48ef5cec8bf89e15f';
  baseurl:string='https://api.openweathermap.org/data/2.5/weather?q='; 

  constructor(private http: HttpClient) {
  }

  Search(city:string):Observable<any>{
    return this.http.get(this.baseurl + city + '&appid=' + this.api_key)
  }

  //Custom Web API
  web_api = 'https://localhost:7234'

 // [HttpGet]
 GetDataFromDB():Observable<any>{
    return this.http.get(this.web_api+'/api/WeatherForecast/')
  }

  //[HttpPost]
  SavetoDB(dataReq:any){
     return this.http.post<any>(this.web_api+'/api/WeatherForecast', dataReq)    
  }

  //[HttpPut]
  SaveUpdate(id:string, UpdatedData:any):Observable<WeatherData>{
    return this.http.put<WeatherData>(this.web_api+'/api/WeatherForecast/'+ id, UpdatedData)
  }

  //[HttpDelete]
  RemoveFromDB(id:string):Observable<WeatherData>{
    return this.http.delete<WeatherData>(this.web_api+'/api/WeatherForecast/' + id)
  }

  GetByPagination(pageno:number,size:number,search:any):Observable<any>{
    return this.http.get(this.web_api+ `/api/WeatherForecast/pagination?PageNumber=${pageno}&PageSize=${size}&Location=${search}`)
  } 
}
