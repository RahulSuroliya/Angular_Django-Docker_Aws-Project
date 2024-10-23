import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../service/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  // Search subject

  form = {
    "subjectName":"",
    "pageNo":1,
    "index":1,
    "LastId":1,
    "MaxId":1,
    "mesg":""
  }

  // Server success/fail message
  message = "";

  // Server error
  success:boolean  = true;

  // contains list
  list:any = []

  /**
   * 
   * @param router 
   * @param service 
   */
  constructor(private router:Router,private service:SubjectService) { }

  ngOnInit() {
    this.search();
  }

  /** Edit a record */
  
  edit(id:number){
    this.router.navigateByUrl("/subject/" + id);
  }

  /** Delete a record */

  delete(id:number){
    var _self = this;
    this.service.delete(id, function (res:any,error:any){
      if (res.data.error){
        alert("Error: " + res.data.message);
        return;
      }else{
      _self.success = true;
      _self.message = res.data.message;
    }})
    this.form = {
      "subjectName":"",
      "pageNo":1,
      "index":1,
      "LastId":1,
      "MaxId":1,
      "mesg":""
    }
    this.search();
    setTimeout(()=> {
      $("#timeout").fadeOut(1000);
    },2000);
  }

  /**
   * Search and get list
   */

  search() {
    var _self = this;
    this.service.search(this.form, function (res:any,error:any){
      if (error){
        alert("Error: "+ error.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
      console.log("subject--------search",_self.list)
    })
  };

  /** Submit the form */

  submit(){
    this.form.pageNo = 1;
    this.search();
  }

  /** Get previous records */

  previous(){
    this.form.pageNo -= 1;
    this.search();
  }

  /** Get next records */

  next(){
    this.form.pageNo += 1;
    this.search();
  }

  reload(){
    window.location.reload();
  }
}

