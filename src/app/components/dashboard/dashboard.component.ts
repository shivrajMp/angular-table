import { Component, OnInit, ViewChild } from '@angular/core';
import { CompanyUserService } from 'src/app/service/company-user.service';
import { CustomIconsComponent } from '../custom-icons/custom-icons.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  userList:any[] = [];
  searchedText='';
  filterList: any[] =[];
  notFoundIcon ='';

  constructor(private userService: CompanyUserService) { }
  
  ngOnInit(): void {
    this.fetchUsers();
    this.notFoundIcon ='../../../assets/user-not-found';
  }

  /**
   * API call to fetch user list
   */
  fetchUsers(): void{
    this.userService.getUserList().subscribe((userListResponse=>{
      if(userListResponse && userListResponse.results){
      this.userList = userListResponse.results;
      this.filterList = JSON.parse(JSON.stringify(this.userList));
      }
    }));
  }

  /**
   * Filter user
   */
  filterUser(): void{
   console.log(this.searchedText);
   this.filterList = this.userList.filter((user) =>{
    return  user.name.first.toUpperCase().startsWith(this.searchedText.toUpperCase())||
    user.name.last.toUpperCase().startsWith(this.searchedText.toUpperCase())||
    user.email.toUpperCase().startsWith(this.searchedText.toUpperCase())||
    user.location.country.toUpperCase().startsWith(this.searchedText.toUpperCase());
  });
  this.filterList = this.searchedText ? this.filterList: this.userList
  console.log(this.userList);
  }

}
