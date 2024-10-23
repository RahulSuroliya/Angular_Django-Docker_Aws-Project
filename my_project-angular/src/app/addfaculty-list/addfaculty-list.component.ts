import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddfacultyService } from '../service/addfaculty.service';

@Component({
  selector: 'app-addfaculty-list',
  templateUrl: './addfaculty-list.component.html',
  styleUrls: ['./addfaculty-list.component.css']
})
export class AddfacultyListComponent implements OnInit {

   //Server success/fail message
   message = "";

   //Server error
   success:boolean = true;
 
   //Contain faculty list
   list:any = []
   
   //search form
   form = {
     "firstName":"",
     "index":1,
     "pageNo":1,
     "MaxId":1,
     "LastId":1,
     "mesg":""
   }
   constructor(private router:Router, private service:AddfacultyService) { }
 
   ngOnInit(){
     this.search();
   }
   //Edit records
 
   edit(id:number){
     this.router.navigateByUrl("/addfaculty/" + id);
   }
   //Delete Record
   delete(id:number){
     var _self = this;
     this.service.delete(id, function(res:any,error:any){
       if (res.data.error){
         alert("Error : " +res.data.message);
         return
       }
       _self.success = false;
       _self.message = res.data.message;
     });
     this.form = {
       "firstName" : "",
     "index" : 1,
     "pageNo" : 1,
     "MaxId" : 1,
     "LastId" : 1,
     "mesg" : ""
     };
     this.search();
     setTimeout(() => {
       $("#timeout").fadeOut(1000);
     },2000);
   };
   /**
    * Searches ang get list
    */
 
    search(){
     var _self = this;
     this.service.search(this.form, function (res:any,error:any){
       if (error){
         alert("Error: " + res.result.message);
         return ;
       }
       _self.form.index = res.result.index;
       _self.form.LastId = res.result.LastId;
       _self.form.MaxId = res.result.MaxId;
       _self.form.mesg = res.result.mesg;
       _self.list = res.result.data;
     });
   };
 
   /** Submit the form */
 
   submit(){
     this.form.pageNo = 1;
     this.search();
   }
 
   /** Get Previous records */
 
   previous(){
     this.form.pageNo -= 1;
     this.search();
   }
 
   /** Get Next records */
 
   next(){
     this.form.pageNo += 1;
     this.search();
   }
 
   /** Reloads the page */
 
   reload(){
     window.location.reload();
   }
 
 
 }


