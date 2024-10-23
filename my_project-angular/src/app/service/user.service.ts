import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from 'jquery';
import { observable } from 'rxjs';
import { environment } from 'src/environments/environment';

/**
 * Provides REST CRUD operations of User functionality
 * Each method of this class receives response-callback method. 
 * Response callback method is called by Observable and passed data and error.
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //Rest endpoint
   apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/User/`

   /**
    * Constructor injects HTTP service
    *
    * @param http
    */

  constructor(private http: HttpClient) { }
   /**
 * Gets User
 *
 * @param id
 * @param response
 */

   get(id: number, compCB:any) {
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        compCB(data);
      }, function fail(data) {
        compCB(data, true)
      });
  }

  preload(compCB:any){
    let url = this.endpoint + "preload";
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data) {
        console.log("user service preload--->",data)
        compCB(data);
      }, function fail(data) {
        compCB(data, true)
    });
  }


 /**
   * Delets a User
   *
   * @param id
   * @param response
   */

  delete(id:number, compCB:any){
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
   * Searches User
   *
   * @param response
   */
  search(form:any, compCB:any){
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
   * Add/Update User
   * @param form Adds or updates a record
   * @param response
   */

  save(form:any, compCB:any){
    let url = this.endpoint + "save";
    this.http.post(url, form). subscribe(
      (data) => {
        compCB(data);
      },
      (data) => {
        compCB(data, true);
      });
  }

}

