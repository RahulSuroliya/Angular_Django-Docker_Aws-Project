import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StaffmemberService } from '../service/staffmember.service';

@Component({
  selector: 'app-staffmember',
  templateUrl: './staffmember.component.html',
  styleUrls: ['./staffmember.component.css']
})
export class StaffmemberComponent implements OnInit {
// staffmember Form
form = {
  "id" : 0,
  "fullName" : "",
  "joiningDate" :"",
  "did" : "",
  "previousEmployer" :"",
  

}  

//Input Errors
inputError = {
  "fullName" : "",
  "joiningDate" :"",
  "did" : "",
  "previousEmployer" :"",
  "sid" :"" 

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

constructor(private aroute: ActivatedRoute, private router: Router, private service: StaffmemberService) { }
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
    // this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function(res:any, error:any){
      console.log("staffmember save() -->", res.data)
      if (res.data.error){
        _self.form=res.form;
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
        _self.form=res.data.data;
        _self.inputError = {
          "fullName" : "",
          "joiningDate" :"",
          "did" : "",
          "previousEmployer" :"",
          "sid" :"" 
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
      "fullName" : "",
      "joiningDate" :"",
      "did" : "",
      "previousEmployer" :"",
      
    }
    this.ngOnInit();
    this.inputError = {
      "fullName" : "",
      "joiningDate" :"",
      "did" : "",
      "previousEmployer" :"",
      "sid" :""    }
    this.message = "";
  }

}

