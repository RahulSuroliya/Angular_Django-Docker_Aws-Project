import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollegeService } from '../service/college.service';
/**
 * Activated route is used to read route parameters
 */
@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

  // College form
  form = {
    "id":0,
    "collegeName":"",
    "collegeAddress":"",
    "collegeState":"",
    "collegeCity":"",
    "collegePhoneNumber":"",
  }

  // Input errors
  inputError = {
    "collegeName":"",
    "collegeAddress":"",
    "collegeState":"",
    "collegeCity":"",
    "collegePhoneNumber":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success: boolean = true;

/**
 * Injects Services
 * @param aroute 
 * @param router 
 * @param service 
 */
  constructor(private aroute:ActivatedRoute,private router:Router,private service:CollegeService) { }

  /**
   * Displays record if primary key is received
   */
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
  }
  /**
   * Save a record
   */

  save(){
    var _self = this;
    this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function (res:any, error:any){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if(_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
          "collegeName":"",
          "collegeAddress":"",
          "collegeState":"",
          "collegeCity":"",
          "collegePhoneNumber":""
        }
      }else{
        _self.message = "Data was not saved"
      }
    });
  }

  reset(){
    this.form = {
      "id":0,
      "collegeName":"",
      "collegeAddress":"",
      "collegeState":"",
      "collegeCity":"",
      "collegePhoneNumber":""
    };
    this.ngOnInit();
    this.inputError = {
      "collegeName":"",
      "collegeAddress":"",
      "collegeState":"",
      "collegeCity":"",
      "collegePhoneNumber":""
    };
    this.message = "";
  }

}

