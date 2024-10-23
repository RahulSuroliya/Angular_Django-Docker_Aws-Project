import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../service/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
// task Form
form = {
  "id" : 0,
  "creationDate" : "",
  "taskTitle" :"",
  "details" : "",
  "aid" :"",
  "sid" :"",

}  

//Input Errors
inputError = {
  "creationDate" : "",
  "taskTitle" :"",
  "details" : "",
  "aid" :"",
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

constructor(private aroute: ActivatedRoute, private router: Router, private service: TaskService) { }
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
    this.preload1();

  }

  // SAVE A RECORD
  save(){
    var _self = this;
    // this.ngOnInit();
    if (isNaN(this.form.id)){
      this.form.id = 0;
    }
    this.service.save(this.form, function(res:any, error:any){
      console.log("task save() -->", res.data)
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
          "creationDate" : "",
          "taskTitle" :"",
          "details" : "",
          "aid" :"",
          "sid" :"" 
        }
      }else{
        _self.message = "Data was not saved";
      }
    });
  }

  preloadData : any = []
  preloadData1 : any = []


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

  preload1() {
    var _self = this;
    this.service.preload1(function(res:any, error:any){
      if(error){
        alert("Preload Error:" + error.message);
        return;
      }
      _self.preloadData1 = res.preloadList1;
      console.log("PreloadList ------->", res.preloadList1);
    });
  }

  /**
     * Go to search page
     */

  reset(){
    this.form = {
      "id" : 0,
      "creationDate" : "",
      "taskTitle" :"",
      "details" : "",
      "aid" :"",
      "sid" :"",
    }
    this.ngOnInit();
    this.inputError = {
      "creationDate" : "",
      "taskTitle" :"",
      "details" : "",
      "aid" :"",
      "sid" :""    }
    this.message = "";
  }

}
