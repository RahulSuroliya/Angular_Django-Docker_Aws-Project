import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TimetableService } from '../service/timetable.service';

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent implements OnInit {

  //search form
  form = {
    "semester":"",
    "pageNo":1,
    "index":1,
    "MaxId":1,
    "LastId":1,
    "mesg":""
  }

  // Contains list
  list:any = []

  // Server success/fail message
  message = "";

  // Server error
  success:boolean = true;

  /**
   * 
   * @param router 
   * @param service 
   */

  constructor(private router: Router, private service: TimetableService) { }

  ngOnInit() {
    this.search();
  }

  /** Edit a record */

  edit(id:any){
    this.router.navigateByUrl("/timetable/" + id);
  }

  /** Delete a record */

  delete(id:any){
    var _self = this;
    this.service.delete(id, function(res:any, error:any){
      if (error){
        alert("Error" + res.data.message);
        return ;
      }
      _self.success = true;
      _self.message = res.data.message;
      _self.form = {
        "semester":"",
        "pageNo":1,
        "index":1,
        "MaxId":1,
        "LastId":1,
        "mesg":"" 
      };
      _self.search();
      setTimeout(()=> {
        $("#timeout").fadeOut(1000);
      },2000);
    })
  };

   /** Search and get list */

   search(){
    var _self = this;
    this.service.search(this.form, function(res:any, error:any){
      if (error){
        alert("Error:" + error.message);
        return;
      }
      _self.form.index = res.result.index;
      _self.form.LastId = res.result.LastId;
      _self.form.MaxId = res.result.MaxId;
      _self.form.mesg = res.result.mesg;
      _self.list = res.result.data;
    })
   };

   // submit the form

   submit(){
    this.form.pageNo = 1;
    this.search();
   }

   // get previous records

   previous(){
    this.form.pageNo -= 1;
    this.search();
   }

   // get next records

   next(){
    this.form.pageNo += 1;
    this.search();
   }

   reload(){
    window.location.reload()
   }

}

