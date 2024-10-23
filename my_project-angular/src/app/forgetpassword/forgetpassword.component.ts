import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  // Resrt endpoint
  endpoint = "http://localhost:8000/ORSAPI/Forgetpassword/submit";

  // Forgetpassword form

  form = {
    "login_id" : ""
  }

  // Input Error
  
  inputError = {
    "login_id" : ""
  }

  // server success or fail message
  message = "";


  // server error
  success:boolean = true;

  constructor(private http:HttpClient) { }
  ngOnInit() {
    localStorage.setItem("sess_msg", "");
    localStorage.setItem("logout_msg", "");    
  }
  forgetpwd(form:any, compCB:any){
    this.http.post(this.endpoint,form).subscribe(
      (data) => {
        console.log("forgetpwd data",data)
        compCB(data);
      },(data) => {
        compCB(data, true);
      })
  };

  submit(){
    var _self = this;
    this.forgetpwd(this.form, function (res:any, error:any){
      console.log(" submit() forgetpwd res", res)
      if (res.data.error){
        _self.success = false;
        _self.message = res.form.inputError;
        _self.inputError = res.form.inputError;
        console.log("INPUTERROR:",_self.inputError)
        return;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.inputError = { "login_id" : "" }
    })
  };

}
