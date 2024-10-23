import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../service/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true; 

  // Search form
  form = {
    "firstName":"",
    "pageNo":1,
    "LastId":1,
    "MaxId":1,
    "index":1,
    "mesg":""
  }

  // Contains Student list
  list:any = [];

  constructor(private route:Router, private service:StudentService) { }

  ngOnInit(){
    this.search();
  }
  //Edit a record
  edit(id:number){
    this.route.navigateByUrl("student/" + id);
  }

  //Delete record
  delete(id:number){
    var _self = this;
    this.service.delete(id, function(res:any,error:any){
      if (error){
        alert("Delete Error : " + res.data.message);
        return;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.form = {
        "firstName":"",
        "pageNo":1,
        "LastId":1,
        "MaxId":1,
        "index":1,
        "mesg":""
      }
      _self.search();
      setTimeout(()=> {
        $("#timeout").fadeOut(1000);
      },2000);
    });
    
  }
  //search ang get list
  search(){
    var _self = this;
    this.service.search(this.form, function(res:any,error:any){
      if (error){
        alert(" Search Error : " + error.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    })
  }
  //Submit the form
  submit(){
    this.form.pageNo = 1;
    this.search();
  }
  //get previous records
  previous(){
    this.form.pageNo -= 1;
    this.search();
  }
  //get next record
  next(){
    this.form.pageNo += 1;
    this.search();
  }
  reload(){
    window.location.reload()
  }

}

