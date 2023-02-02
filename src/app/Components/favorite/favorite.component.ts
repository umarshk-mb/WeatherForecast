import { WeatherData } from '../../model/WeatherModel';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherapiService } from '../../services/weatherapi.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'weather-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent {
  currentId:string="";
  read:any = [] ; 

  search='';

  page:any;
  size:any=8;  
  select = [2,4,6,10]
 
  data:any;
  weather:Observable<Array<WeatherData>> | undefined  
  constructor(private getdata:WeatherapiService,private route: ActivatedRoute){     
  }
  GetDataFromDB(){
    this.getdata.GetDataFromDB().subscribe((value)=>{
    this.read = value  
    })
  }

  ngOnInit() {
   // this.weather = this.getdata.WeatherToFav()
    this.read = this.route.snapshot.data['message'];
    this.GetDataFromDB()
  }

  SavetoDB(data:any){
    this.getdata.SavetoDB(data).subscribe((data)=>{      
      console.log(data)
    }
   )
  } 

  setId(id:string){
      this.currentId=id;
  }
  
  SaveUpdate(contactForm:any){   
    this.getdata.SaveUpdate(this.currentId,contactForm).subscribe(()=>{
    this.GetDataFromDB();
    })    
  }

 RemoveFromDB(id:string){
  this.getdata.RemoveFromDB(id).subscribe(()=>{
    this.GetDataFromDB();    
  })
 }

 onPageChange(event:any){  
  this.page = event;
  this.getdata.GetDataFromDB(); 
 }

 onPageSizeChange(event:any){
  this.size = event.target.value;
  this.page = 1;
  this.getdata.GetDataFromDB();
 }

 
 GetByPagination(page:number,size:number,search:any){
  this.getdata.GetByPagination(page,size,search).subscribe((res)=>{    
      this.read= res;
  })
 }
}
