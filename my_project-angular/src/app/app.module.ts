import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { CollegeComponent } from './college/college.component';
import { CollegeListComponent } from './college-list/college-list.component';
import { CourseComponent } from './course/course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { MarksheetComponent } from './marksheet/marksheet.component';
import { MarksheetListComponent } from './marksheet-list/marksheet-list.component';
import { MeritlistComponent } from './merit-list/merit-list.component';
import { RoleComponent } from './role/role.component';
import { RoleListComponent } from './role-list/role-list.component';
import { StudentComponent } from './student/student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { AddFacultyComponent } from './add-faculty/add-faculty.component';
import { AddfacultyListComponent } from './addfaculty-list/addfaculty-list.component';
import { TimetableComponent } from './timetable/timetable.component';
import { TimetableListComponent } from './timetable-list/timetable-list.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { DocumentComponent } from './document/document.component';
import { RegistrationComponent } from './registration/registration.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { VehicleListComponent } from './vehicle-list/vehicle-list.component';
import { ShoppingCartComponent } from './shoppingcart/shoppingcart.component';
import { ShoppingCartListComponent } from './shoppingcart-list/shoppingcart-list.component';
import { LeadComponent } from './lead/lead.component';
import { LeadListComponent } from './lead-list/lead-list.component';
import { OrderComponent } from './order/order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { IssueComponent } from './issue/issue.component';
import { IssueListComponent } from './issue-list/issue-list.component';
import { DoctorComponent } from './doctor/doctor.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { StaffmemberComponent } from './staffmember/staffmember.component';
import { StaffmemberListComponent } from './staffmember-list/staffmember-list.component';
import { PortfolioManagementComponent } from './portfoliomanagement/portfoliomanagement.component';
import { PortfolioManagementListComponent } from './portfoliomanagement-list/portfoliomanagement-list.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { PurchaseorderListComponent } from './purchaseorder-list/purchaseorder-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    WelcomeComponent,
    UserComponent,
    UserListComponent,
    CollegeComponent,
    CollegeListComponent,
    CourseComponent,
    CourseListComponent,
    MarksheetComponent,
    MarksheetListComponent,
    MeritlistComponent,
    RoleComponent,
    RoleListComponent,
    StudentComponent,
    StudentListComponent,
    SubjectComponent,
    SubjectListComponent,
    AddFacultyComponent,
    AddfacultyListComponent,
    TimetableComponent,
    TimetableListComponent,
    ChangepasswordComponent,
    ForgetpasswordComponent,
    DocumentComponent,
    RegistrationComponent,
    VehicleComponent,
    VehicleListComponent,
    ShoppingCartComponent,
    ShoppingCartListComponent,
    LeadComponent,
    LeadListComponent,
    OrderComponent,
    OrderListComponent,
    IssueComponent,
    IssueListComponent,
    DoctorComponent,
    DoctorListComponent,
    TaskComponent,
    TaskListComponent,
    StaffmemberComponent,
    StaffmemberListComponent,
    PortfolioManagementComponent,
    PortfolioManagementListComponent,
    PurchaseorderComponent,
    PurchaseorderListComponent,
    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
