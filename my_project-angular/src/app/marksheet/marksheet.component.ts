import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarksheetService } from '../service/marksheet.service';

@Component({
  selector: 'app-marksheet',
  templateUrl: './marksheet.component.html',
  styleUrls: ['./marksheet.component.css']
})
export class MarksheetComponent implements OnInit {

  // Marksheet form
  form = {
    "id":0,
    "rollNumber":"",
    "name":"",
    "physics":"",
    "chemistry":"",
    "maths":""
  }

  // inputErrors
  inputError = {
    "rollNumber":"",
    "name":"",
    "physics":"",
    "chemistry":"",
    "maths":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  constructor(private aroute:ActivatedRoute,private router:Router,private service:MarksheetService) { }

  /** Display record if primary is used */

  ngOnInit() {
    var _self = this;
    console.log("marksheet-------->")
    this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    if (!isNaN(this.form.id) && this.form.id > 0){
      this.service.get(this.form.id, function (res:any,error:any){
        if (error){
          alert("Error: " + error.message);
          console.log("error marksheet")
          return;
        }
        _self.form = res.data;
        console.log("marskukdfji",_self.form)
      })
    }
  };

  /** Save a record */

  save(){
    var _self = this;
    this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function (res:any,error:any){
      if (res.data.error){
        _self.success = false;
        _self.message = res.data.message;
        _self.inputError = res.form.inputError;
        return;
      }
      _self.success = true;
      if (_self.success){
        _self.success = true;
        _self.message = res.data.message;
        _self.inputError = {
            "rollNumber":"",
            "name":"",
            "physics":"",
            "chemistry":"",
            "maths":""
        }
      }else{
        _self.message = "Data was not saved";
      }
    })
  };

  reset(){
    this.form = {
      "id":0,
      "rollNumber":"",
      "name":"",
      "physics":"",
      "chemistry":"",
      "maths":""
    };
    this.ngOnInit();
    this.inputError = {
      "rollNumber":"",
      "name":"",
      "physics":"",
      "chemistry":"",
      "maths":""
    };
    this.message = "";   
  }

}
