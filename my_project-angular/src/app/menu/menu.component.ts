import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

  msg = "";
  firstname:any = "";
  rolename:any = "";
  constructor(private router:Router, private location: Location, private aroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.isSessionout();
    this.isLogout();
  }

  isSessionout(){
    let loginId = localStorage.getItem("loginId")
    console.log("isSessionout method --> login-->",loginId)
    if((loginId == "null" || loginId == null) && (this.location.path() != "" && this.location.path() != "/login" &&
    this.location.path() != "/sessionOut" && this.location.path() != "/logout" && this.location.path() != "/registration"
    && this.location.path() != "/forgetpassword")){
      localStorage.clear();
      console.log("Session out Path -- >", this.location.path())
      this.msg = "OOPS! YOUR SESSION IS EXPIRED";
      localStorage.setItem("sess_msg",this.msg);
      this.router.navigateByUrl("/sessionOut");
      return true;
      }else{
        return false;
      }
  }
  islogin(){
    console.log("menu -- > islogin -->")
    let check = localStorage.getItem("loginId");
    if(check != "null" && check != null){
      this.rolename = localStorage.getItem("roleName");
      this.firstname = localStorage.getItem("firstName");
      return true;
    }else{
      return false;
    }
  }
  isLogout(){
    console.log("menu -->isLogout -->")
    if(this.location.path() == "/logout"){
      localStorage.clear();

      localStorage.setItem("loginId","null");
      localStorage.setItem("logout_msg","Logout Successfully!!");
      this.router.navigateByUrl("login")
    }
}
}
