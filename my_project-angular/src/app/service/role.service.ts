import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

/**
 * Provides REST CRUD operations of Role functionality
 * Each method of this class receives response-callback method. 
 * Response callback method is called by Observable and passed data and error.
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class RoleService {
    // Rest Endpoint
    apiUrl = environment.apiUrl;

  endpoint = `${this.apiUrl}/ORSAPI/Role/`

    /**
   * Constructor injects HTTP service
   * 
   * @param http 
   */

  constructor(private http:HttpClient) { }
  /**
 * Gets Role
 * 
 * @param id 
 * @param response 
 */

  get(id:number,compCB:any){
    let url = this.endpoint + "get/" + id;
    this.http.get(url).subscribe(
      (data) =>{
        compCB(data);
      },(data)=>{compCB(data,true);
      });
  }
  /**
   * Delets a Role
   * 
   * @param id 
   * @param response 
   */
  delete(id:number,compCB:any){
    let url = this.endpoint + "delete/" + id;
    this.http.get(url).subscribe(
      (data) =>{
        compCB(data);
      },(data)=>{compCB(data,true);
      });
  }

  /**
   * Searches Role
   * 
   * @param response 
   */
  search(form:any,compCB:any){
    let url = this.endpoint + "search";
    this.http.post(url,form).subscribe(
      (data) =>{
        compCB(data);
      },(data)=>{compCB(data,true);
      });
  }
  /**
   * Add/Update Role
   * @param form Adds or updates a record 
   * @param response 
   */
  save(form:any,compCB:any){
    let url = this.endpoint + "save";
    this.http.post(url,form).subscribe(
      (data) =>{
        compCB(data);
      },(data)=>{compCB(data,true);
      });
  }
}
