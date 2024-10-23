import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { DeclareFunctionStmt } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/Course/`

  constructor(private http:HttpClient) { }

  get(id:number, compCB:any){
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
        compCB(data);
      }, function fail(data){
        console.log("Hello abc",data)
        compCB(data,true);
      }
    );
  }

  delete(id:number, compCB:any){
    let url = this.endpoint + "delete/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
  }
  search(form:any, compCB:any){
    let url = this.endpoint + "search/";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
  }

  save(form:any, compCB:any){
    let url = this.endpoint + "save/";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
  }


}
