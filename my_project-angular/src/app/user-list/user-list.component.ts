import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  //server Responce messgae
  message = "";

  // server Error 
  success: boolean = true;

  // contains user list
  list: any = [];

  // search from
  form = {
    "firstName" : "",
    "login_id" : "",
    "pageNo" : 1,
    "index" : 1,
    "MaxId" : 1,
    "LastId" : 1,
    "mesg" : "",

  }
   /**
   * @param router
   * @param service
   */
   constructor(private router:Router,private service: UserService) { }
   /**
    * Loads list
    */
   ngOnInit(): void {
     console.log("search in list --->",this.list);
     console.log("search in list form2 ---->",this.form);
     this.search();
     console.log("This.search()-------")
   }
    /**
   * Edits a user
   * @param id
   */
  edit(id:number){
    this.router.navigateByUrl("/user/" + id);
  }
  /**
   * Deletes a record
   */
  delete(id:number){
    var _self = this;
    this.service.delete(id,function(res:any, error:any){
      if(res.data.error){
        alert("Error:" + res.data.message);
        return;
      }else{
        _self.success = true;
        _self.message = res.data.message;
      }
    });
    this.form = {
      "firstName" : "",
      "login_id" : "",
      "pageNo" : 1,
      "index" : 1,
      "MaxId" : 1,
      "LastId" : 1,
      "mesg" : "",
    }
    this.search();
    setTimeout(() => {
      $('#timeout').fadeOut(1000);
    }, 2000);

  }
  /**
 * Searches and get list
 */
search(){
  var _self = this;
  console.log("search in list form---->",this.form);
  this.service.search(this.form, function(res:any, error:any){
    if (error){
      alert("search Error :" + res.result.message);
      return;
    }
    _self.form.index = res.result.index;
    _self.form.LastId = res.result.LastId;
    _self.form.MaxId = res.result.MaxId;
    _self.form.mesg = res.result.mesg;
    _self.list = res.result.data;

    console.log("search list ------>", _self.list)

  });
}
/**
 * Submit the form
 */
submit(){
  console.log("search in list form1--->",this.form);
  var _self = this;
  _self.form.pageNo = 1;
  this.search();
}

// Get Previous records

previous(){
  var _self = this;
  _self.form.pageNo -= 1;
  this.search();
}

//Get Next records
next(){
  var _self = this;
  _self.form.pageNo += 1;
  this.search();
}

//Reloads the page

reload(){
  window.location.reload();
}
}


