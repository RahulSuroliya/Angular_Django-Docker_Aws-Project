import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from '../service/vehicle.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
// vehicle Form
form = {
  "id" : 0,
  "vehicleId" : "",
  "vehicleName" : "",
  "tid" :"",
  "purchaseDate" : "",
  "buyerName" : ""
  

}  

//Input Errors
inputError = {
  "vehicleId" : "",
  "vehicleName" : "",
  "tid" : "",
  "purchaseDate" : "",
  "buyerName" : ""

}

 //server success/ Fail messege
 message = "";

 // server Error
 success: boolean = true;

   /**
 * 
 * @param aroute
 * @param router
 * @param service
 */

constructor(private aroute: ActivatedRoute, private router: Router, private service: VehicleService) { }
  // Display record if primary key is used
  ngOnInit(): void {
    var _self = this;
    _self.form.id = parseInt(this.aroute.snapshot.paramMap.get("id") || "{}");
    if ( !isNaN(_self.form.id) && _self.form.id > 0){
      this.service.get(_self.form.id, function (res:any, error:any){
        if (error){
          alert("Error:----" + error.message);
          return ;
        }
        _self.form = res.data;
      });
    }
    this.preload();
  }

  // SAVE A RECORD
  save(){
    var _self = this;
    this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function(res:any, error:any){
      console.log("vehicle save() -->", res.data)
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      console.log("res.data.message -->",_self.success)
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.form=res.data.data
        _self.inputError = {
          "vehicleId" : "",
          "vehicleName" : "",
          "tid" : "",
          "purchaseDate" : "",
          "buyerName" : "",
        }
      }else{
        _self.message = "Data was not saved";
      }
    });
  }

  preloadData : any = []
  preload() {
    var _self = this;
    this.service.preload(function(res:any, error:any){
      if(error){
        alert("Preload Error:" + error.message);
        return;
      }
      _self.preloadData = res.preloadList;
      console.log("PreloadList ------->", res.preloadList);
    });
  }

  /**
     * Go to search page
     */

  reset(){
    this.form = {
      "id" : 0,
      "vehicleId" : "",
      "vehicleName" : "",
      "tid" :"",
      "purchaseDate" : "",
      "buyerName" : "",
    }
    this.ngOnInit();
    this.inputError = {
      "vehicleId" : "",
      "vehicleName" : "",
      "tid" : "",
      "purchaseDate" : "",
      "buyerName" : ""
    }
    this.message = "";
  }

}
