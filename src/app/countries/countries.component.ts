import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
 
Countries:any
clicked:boolean=false;
country:any;

baseUrl = environment.apiUrl
  constructor(private httpreq: DataService) {}

  ngOnInit(): void {
this.getData();
}
getData() {
  this.httpreq.get(this.baseUrl).subscribe((res:any)=>{
    this.Countries = res.countries;
 })
}
countryClick(val:any){
  this.country=val;
}

}

