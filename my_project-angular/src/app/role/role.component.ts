import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoleService } from '../service/role.service';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {


  //role form
  form = {
    "id" : 0,
    "name" : "",
    "description" : ""
  }
   // input errors
  inputError ={
    "name" : "",
    "description" : ""
  }

  //server success/fail message
  message = "";

  //server error
  success:boolean = true;

  constructor(private aroute:ActivatedRoute,private router:Router,private service:RoleService  ) { }

   /**
   * Display record if primary key is used
   */

  ngOnInit(): void {
    var _self = this;
    console.log("roll____edit")
    this.form.id = Number(this.aroute.snapshot.paramMap.get("id"));
    if(!isNaN(this.form.id) && (this.form.id > 0)){
      this.service.get(this.form.id,function(res:any,error:any){
        if (error){
          alert("Error:" + res.data.message);
          return;

        }
        _self.form = res.data;
      });
    }
   }

     /** Save a record */

save(){
  var _self = this;
  this.ngOnInit();
  if ( isNaN(this.form.id)){
    this.form.id = 0;
  };
  this.service.save(this.form, function (res:any,error:any){
    if (res.data.error){
      _self.success = false;
      _self.message = res.data.message;
      _self.inputError = res.form.inputError;
      return ;
    }
    _self.success = res.data.message;
    if (_self.success){
      _self.success = true;
      _self.message = res.data.message;
      _self.inputError = {
        "name":"",
        "description":""
      }
    }else{
      _self.message = "Data was not saved";
    }
  });
}

reset(){
  this.form = {
    "id":0,
    "name":"",
    "description":""
  }
  this.ngOnInit();
  this.inputError = {
    "name":"",
    "description":""
  }
  this.message = "";
}

}


