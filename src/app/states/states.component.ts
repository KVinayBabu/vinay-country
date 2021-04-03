import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-states',
  templateUrl: './states.component.html',
  styleUrls: ['./states.component.css']
})
export class StatesComponent implements OnInit {
  countryData:any;
  @Input() set item (val:any){
    this.countryData = val;
    if(this.countryData && this.countryData.country){
      this.getFlag()
      this.getStates()
    }
    
  }
  flag=environment.FlagUrl 
  state=environment.stateUrl
  flags:any 
  states:any
  constructor(private httpreq: DataService) { }

  ngOnInit(): void {
  }
  getFlag(){
    let obj = {
      "country":this.countryData.country.country_name
    }
    this.httpreq.post(this.flag,obj).subscribe((res:any)=>{
      console.log('Flag', res);
      console.log(this.item)
      this.flags = res;
      console.log(this.flags)
   })
}
getStates(){
  let obj={
    "country":this.countryData.country.country_name
  }
  this.httpreq.post(this.state,obj).subscribe((res:any)=>{
    this.states = res.data.states;
    console.log(this.states);
 })
}
}
