import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddfacultyService {

  apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/Faculty/`

  constructor(private http: HttpClient) { }

  get(id:number, compCB:any){
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
        compCB(data);
      },function fail(data){
        compCB(data, true);
      }
    );
  }

  preload(compCB:any){
    let url = this.endpoint + "preload";
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
        compCB(data);
      },function fail(data){
        compCB(data, true);
      }
    );
  }

  delete(id:number, compCB:any){
    let url = this.endpoint + "delete/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      (data) => {
        compCB(data);
      },(data) =>{
        compCB(data, true);
      }
    );
  }

  search(form:any, compCB:any){
    let url = this.endpoint + "search";
    var observable = this.http.post(url,form);
    observable.subscribe(
      (data) => {
        compCB(data);
      },(data) =>{
        compCB(data, true);
      }
    );
  }

  save(form:any, compCB:any){
    let url = this.endpoint + "save";
    var observable = this.http.post(url,form);
    observable.subscribe(
      (data) => {
        compCB(data);
      },(data) =>{
        compCB(data, true);
      }
    );
  }
}
