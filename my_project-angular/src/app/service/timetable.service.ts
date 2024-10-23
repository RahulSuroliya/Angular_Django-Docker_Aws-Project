import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/TimeTable/`

  constructor(private http:HttpClient) { }

  get(id: number, compCB:any) {
    
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        compCB(data);
      },function fail(data){
        compCB(data, true)
      });
  }

  preload(compCB:any){
    let url = this.endpoint + "preload";
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
        console.log("TTTTTTTT------>",data)
        compCB(data);
      }, function fail(data){
        compCB(data, true)
      });
  }

   /**
   * Deletes a TimeTable
   * 
   * @param id 
   * @param response 
   */

   delete(id: number, compCB:any){
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
   }
  
   /**
   * Searches TimeTable
   * 
   * @param response 
   */
    search(form:any, compCB:any) {
      let url = this.endpoint + "search";
      this.http.post(url, form).subscribe(
        (data) => {
          compCB(data);
        },
        (data) => {
          compCB(data, true);
        });
    }


    /**
     * Add/Update Timetable
     * @param form Adds or updates a record 
     * @param response 
     */
    save(form:any, compCB:any) {

      let url = this.endpoint + "save";
      this.http.post(url, form).subscribe(
        (data) => {
          compCB(data);
        },
        (data) => {
          compCB(data, true);
        });
    }

  }
