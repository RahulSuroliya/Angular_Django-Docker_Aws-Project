import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../service/registration.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  // Registration form
  form = {
    "id" : 0,
    "firstName" : "",
    "lastName" : "",
    "login_id" : "",
    "password" : "",
    "confirmpassword" : "",
    "dob" : "",
    "address" : "",
    "gender" : "",
    "mobilenumber" : "",
    "role_Id" : 2,
    "role_Name" : ""
  };

  //Input Errors
  inputError = {
    "firstName" : "",
    "lastName" : "",
    "login_id" : "",
    "password" : "",
    "confirmpassword" : "",
    "dob" : "",
    "address" : "",
    "gender" : "",
    "mobilenumber" : "",
  }

  // Server Success / fail message
  message = "";

  // Server Error
  success : boolean = true;

  /** Inject Service
   * @param service
   */

  constructor(private router: Router, private service:RegistrationService ) { }

  ngOnInit() {
    // localStorage.clear()
    localStorage.setItem("sess_msg","");
    localStorage.setItem("logout_msg","");
  }

  // save a record
  save(){
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    var _self = this;
    this.service.save(this.form, function(res:any, error:any){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = res.data.message;
      if(_self.success){
        _self.success = true;
        _self.message = "Record has been saved successfully";
        _self.inputError = {
          "firstName" : "",
          "lastName" : "",
          "login_id" : "",
          "password" : "",
          "confirmpassword" : "",
          "dob" : "",
          "address" : "",
          "gender" : "",
          "mobilenumber" : "",
        };
      }else{
        _self.success = false;
        _self.message = "Data was not saved"
      }
    });
  }

  reset(){
    this.form = {
      "id" : 0,
      "firstName" : "",
      "lastName" : "",
      "login_id" : "",
      "password" : "",
      "confirmpassword" : "",
      "dob" : "",
      "address" : "",
      "gender" : "",
      "mobilenumber" : "",
      "role_Id" : 2 ,
      "role_Name" : ""
  }
  this.inputError = {
    "firstName" : "",
      "lastName" : "",
      "login_id" : "",
      "password" : "",
      "confirmpassword" : "",
      "dob" : "",
      "address" : "",
      "gender" : "",
      "mobilenumber" : "",
  }
  this.message = ""

};
}








