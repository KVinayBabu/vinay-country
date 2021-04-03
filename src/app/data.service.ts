import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url:any
 baseUrl = environment.apiUrl
 constructor(private http:HttpClient) { }

 get(url: string){
   return this.http.get(url)
 }

 post(url: string, data: any){
   return this.http.post(url,data)
 }
}
