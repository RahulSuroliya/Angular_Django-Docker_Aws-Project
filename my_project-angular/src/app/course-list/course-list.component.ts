import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from '../service/course.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  // search form
  form = {
    "courseName":"",
    "pageNo":1,
    "index":1,
    "LastId":1,
    "MaxId":1,
    "mesg":""
  }

  // contain course list
  list:any = [];

  // server success/ fail message
  message = "";

  // server error
  success:boolean = true;

  constructor(private router:Router, private service:CourseService) { }

  ngOnInit() {
    this.search();
  }
  /**
   * Edit a record
   */
  
  edit(id:number){
    this.router.navigateByUrl("/course/" + id);
  }

  /**
   * Delete a record
   */

  delete(id:number){
    var _self = this;
    this.service.delete(id,function (res:any, error:any){
      if (res.data.error){
        alert("Error:--" + res.data.message);
        return;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.form = {
        "courseName":"",
      "pageNo":1,
      "index":1,
      "LastId":1,
      "MaxId":1,
      "mesg":""
      }
      _self.search();
      setTimeout(()=> {
        $("#timeout").fadeOut(1000);
      },2000);
    })
  };
   /**
   * Searches and get list
   */
  search(){
    var _self = this;
    this.service.search(this.form, function (res:any, error:any){
      if (error){
        alert("Error: " + res.data.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    })
  };
  
  /** submit the form */

  submit(){
    this.form.pageNo = 1;
    this.search();
  }

  /** get previous records */

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  /** get next records */

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  /** Reloads the page  */

  reload(){
    window.location.reload();
  }
}

