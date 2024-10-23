import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Provides REST CRUD operations of User functionality
 * Each method of this class receives response callback method
 * Response callback method is called by Observable and passed data and error
 */


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Rest endpoint
  apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/Login/`
  locatar : any;
  form : any;

  /** Constructor injects Http service
   * 
   * @param http
   */

  constructor(private http: HttpClient) {
    console.log("------>Auth service")
   }
     /**
   * 
   * @param form
   * 
   */
  auth(form:any, compCB:any){
    let url = this.endpoint + "auth";
    this.http.post(url,form).subscribe(
    (data) =>{
      console.log("data-----", data)
      compCB(data);
    },
    (data) =>{
      compCB(data, true);
    }
    );
  }
  
}
