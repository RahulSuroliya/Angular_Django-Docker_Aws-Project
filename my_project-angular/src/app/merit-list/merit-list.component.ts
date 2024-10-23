import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meritlist',
  templateUrl: './merit-list.component.html',
  styleUrls: ['./merit-list.component.css']
})
export class MeritlistComponent implements OnInit {

  // Rest Endpoint
  endpoint = "http://localhost:8000/ORSAPI/Marksheet/meritList";

  // Contains data
  list:any = []

  constructor(private http:HttpClient) { }

  /** Gets merit data */
  
  ngOnInit() {
    var _self = this;
    this.merit(function (res:any,error:any){
      if (error){
        alert("Error: " + error.message);
        return ;
      }
      _self.list = res.merit;
    })
  }

  /** Calls merit 
  */
  

  merit(compCB:any){
    this.http.get(this.endpoint).subscribe(
      (data) => {
        compCB(data);
      },(data) => {
        compCB(data,true);
      })
  };


}

