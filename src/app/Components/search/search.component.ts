import { Component } from '@angular/core';
import { WeatherapiService } from '../../services/weatherapi.service';
import { WeatherData } from '../../model/WeatherModel';

@Component({
  selector: 'weather-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  //getting and storing data into te array from Open weather API. 
  forecast :any = [];
  CityName:string='';

  //Creating new objects of type WeatherData.
  weatherforecast!:WeatherData;
  location:string='';
  temperature:any='';
  humidity:string='';
  pressure:string='';
  weather:string='';
  icon:any;
  src:any;


  constructor(private api:WeatherapiService){}  
  
  display:boolean=false;
  disabled:boolean=true;
  
  //button disable or enable
  show(){
    if(this.CityName!=''){
      this.disabled = false;
      
    }
    else{
      this.disabled = true;      
    }
  }
  
  //Click method to get the data
  Search(){
    if(this.CityName!=null){
      this.display=true
      this.api.Search(this.CityName).
      subscribe((data)=>{
      // console.log(data)
        this.forecast = data
        this.location = this.forecast.name
        this.temperature = this.forecast.main.temp
        this.humidity = this.forecast.main.humidity
        this.pressure = this.forecast.main.pressure
        this.weather = this.forecast.weather[0].description  
        this.icon = this.forecast.weather[0].icon 
        this.src = `https://openweathermap.org/img/wn/${this.icon}@2x.png`      
      },
      (error)=>{
        this.display=false
        console.error("City not found",error)
      })      
    }   
  }


  // To save the data
  AddToFavourite(){
    this.weatherforecast = new WeatherData()
    this.weatherforecast.weather = this.weather
    this.weatherforecast.temperature = this.temperature
    this.weatherforecast.humidity = this.humidity
    this.weatherforecast.pressure = this.pressure
    this.weatherforecast.location = this.location
    this.api.SavetoDB(this.weatherforecast).subscribe(
      ()=>{
        window.alert("Data saved Succesfully .")
      },
      (error)=>{
        console.error("Error while Saving the data", error)
      })
  }
}
