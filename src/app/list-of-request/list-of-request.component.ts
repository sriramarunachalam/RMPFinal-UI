import { Component, OnInit } from '@angular/core';
import { OperationsService } from '../operations.service';
import { ListOfRequest } from './ListOfRequest.model';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Subject } from 'rxjs';
import {AuthService} from "../_services/auth.service";
import { Employees } from './Employees.model';


@Component({
  selector: 'app-list-of-request',
  templateUrl: './list-of-request.component.html',
  styleUrls: ['./list-of-request.component.css']
})
export class ListOfRequestComponent implements OnInit {

  UpdatedRequests: ListOfRequest[] = [];
  NewRequest: ListOfRequest;
  SingleRequest: ListOfRequest;
  EmployeesList: Employees[] = [];
  role: string;
  minDate: Date;
  ShowCard = false;
  RequestStatus = 'Pending';
  ShowEmployees = false;

  constructor(private operationService: OperationsService,
              private router: Router, private authService: AuthService ) {
    this.minDate = new Date();
  }

  ngOnInit() {
    // this.GetLoggedinAccountID()
    this.role = this.authService.role;
    this.getAccountDetails(this.role);
  }

  /*GetLoggedinAccountID()
  {
    this.ShowAccounts = !this.ShowAccounts;
    this.LoggedInAccount = this.operationService.ShowLoggedInAccountDetails();
    console.log("List of Request Component getting the selected Account from Service ");
    console.log(this.LoggedInAccount);
    this.getAccountDetails(this.LoggedInAccount.id)
    // New Change

    this.AccountId = this.LoggedInAccount.id;
    console.log(this.AccountId);
  }*/

  getAccountDetails(AccountName: string) {
    console.log('Display of Account details based on selected ID');
    this.operationService.DisplayListOfRequestsByName(AccountName);
    this.operationService.getListofRequests().subscribe(
      (UpdatedData) => {
        this.UpdatedRequests = UpdatedData
        console.log(UpdatedData);
      });
    // .subscribe(
    //   (AccountsData)=>
    //   {
    //     this.ListOfRequests = AccountsData
    //     console.log(AccountsData);
    //     //this.RequestList.next(this.ListOfRequests);
    //   });

  }

  SubmitForm(AccountsForm: NgForm) {
    console.log(AccountsForm.value);
    this.operationService.PostListofRequests(AccountsForm.value).subscribe(
      (Data) => {
        console.log(Data);
        this.NewRequest = Data;
        console.log('Account ID');
        console.log(this.NewRequest.role);
        this.getAccountDetails(this.NewRequest.role);
        this.role = this.authService.role;
       }
       );
    AccountsForm.resetForm();
  }

  DisplayAccount(ShowRequest: ListOfRequest) {
    this.ShowCard = true;
    this.SingleRequest = ShowRequest;
    console.log(this.SingleRequest);
  }

  CancelCard() {
    this.ShowCard = false;
  }

  CancelEmployees() {
    this.ShowEmployees = !this.ShowEmployees;
  }

  ViewEmployees(Requestid: number) {
    this.ShowEmployees = true;
    console.log('Request Id');
    this.operationService.GetEmployeesbyRequestID(Requestid)
    .subscribe(
      (Employees) => {this.EmployeesList = Employees});
  }


}
