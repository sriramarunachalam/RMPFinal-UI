import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OperationsService } from '../operations.service';
import { Accounts } from './account.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private operationService: OperationsService , private router: Router) { }

  value: number = 0;
  AccountsList: Accounts[] = [];
  LoginAccount: Accounts;
  ShowAccounts = false;
  ngOnInit() {
  }

  SubmitForm(AccountsForm: NgForm)
  {
    console.log(AccountsForm.value);
    this.operationService.AddAccount(AccountsForm.value).subscribe(
       (Data)=> 
      {
         console.log(Data)
      }
       );
  }

  DisplayAccounts(){
    this.ShowAccounts = !this.ShowAccounts;
    this.operationService.DisplayAccounts().subscribe(
      (AccountData) => {
        console.log(AccountData);
        this.AccountsList = AccountData
      });
  }

  GetSingleAccount(Account: Accounts) {
    this.LoginAccount = Account;
    this.operationService.DisplayResourceRequests(this.LoginAccount);
    this.router.navigate(['RequestList']);
  }

}
