import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable } from 'rxjs';
import { data } from 'jquery';
import { environment } from 'src/environments/environment';

/**
 * Provides REST CRUD operations of College functionality
 * Each method of this class receives response-callback method.
 * Response callback method is called by Observable and passed data and error.
 *
 */
@Injectable({
  providedIn: 'root'
})

export class OrderService {

  // Reset Endpoint
  apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/Order/`

  /**
   * Constructor injects HTTP service
   *
   * @param http
   */

  constructor(private http:HttpClient) { }

    /**
     * get College
     * @params id
     * @params response
     */

  get(id:number, compCB:any){
    let url = this.endpoint + "get/" + id;
    var observable = this.http.get(url);
    observable.subscribe(
      function success(data){
      compCB(data);      
    },function fail(data){
      compCB(data, true);
    });
}
 /**
   * Delets a College
   *
   * @param id
   * @param response
   */
  delete(id:number, compCB:any){
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) => {
        compCB(data);
      }, (data) => {
        compCB(data,true);
      }
    );
  }
   /**
   * Searches Order
   *
   * @param response
   */

   search(form:any, compCB:any){
    let url = this.endpoint + "search";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
   }
   search1(form:any, compCB:any){
    let url = this.endpoint + "search1";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      }
    );
   }
  

 /**
   * Add/Update Order
   * @param form Adds or updates a record
   * @param response
   */

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


  save(form:any, compCB:any){
    let url = this.endpoint + "save";
    this.http.post(url,form).subscribe(
      (data) => {
        compCB(data);
      }, (data) => {
        compCB(data,true);
      }
    );
  }
}