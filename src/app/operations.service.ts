import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accounts } from './account/account.model';
import { Subject } from 'rxjs';
import { ListOfRequest } from './list-of-request/ListOfRequest.model';


@Injectable({
  providedIn: 'root'
})
export class OperationsService {

  LoginAccount: Accounts;

  AccountSubject: Subject<Accounts>;

  ListOfRequests: ListOfRequest[] = [];

  RequestList = new Subject<ListOfRequest[]>();


  constructor(private Http: HttpClient) { }

  AddAccount(NewAccount: Accounts)
  {
    return this.Http.post("http://localhost:56819/api/RMG/accounts/", NewAccount);

  }

  DisplayAccounts()
  {
    return this.Http.get<Accounts[]>("http://localhost:56819/api/RMG/accounts");
  }


  // DisplayListOfRequestsById(AccountID: number)
  // {
  //   return this.Http.get<ListOfRequest[]>("http://localhost:56819/api/RMG/requests/" +AccountID);
  // }


  DisplayListOfRequestsByName(AccountName: string) {
    this.Http.get<ListOfRequest[]>('http://localhost:56819/api/RMG/requests/' + AccountName)
      .subscribe(
        (AccountsData) => {
          this.ListOfRequests = AccountsData
          console.log(AccountsData);
          this.RequestList.next(this.ListOfRequests);
        });
  }


  getListofRequests() {
    return this.RequestList.asObservable();
  }


  PostListofRequests(NewRequest: ListOfRequest) {
    return this.Http.post<ListOfRequest>("http://localhost:56819/api/RMG/NewRequest", NewRequest);
  }


  DisplayResourceRequests(LoggedInAccount: Accounts) {
    this.LoginAccount = LoggedInAccount;
    console.log("Operations Service getting the Selected Account from Account Component");
    console.log(this.LoginAccount);
  }

  ShowLoggedInAccountDetails() {
    if(this.LoginAccount==null)
    {
      console.log("Login Account is Null");
    }
    else
      return this.LoginAccount;
  }
}
// Algorithm of Steps to be Done:

// Step 1:
// Add the Account using the Http Post Method

// Step 2:
// Display the Accounts that are present in the database along with their ID's.
// Make a Http Get request to get all the accounts from the database.
// Use some logic to make the Id's Hidden.
// Get the ID of the Clicked account.
// LOGIC --> Use ngFor Loop to display the accounts from DB.
// in ngFor Loop="Let account of accounts" (onClick)=IdForNewRequest(account.id)

// Step 3:
// Use the account Id received in the above method and equate to the Account id of the New Request form.
// AccountID = account.id
// Now the Fields of the New Request form will be like this:

// RequesdId = 0. will be set to zero and using ngModel used in the form. Will be hidden.
// Number of developers required: number
// Technology: string
// Start date and End Date: Date
// AccountID = Again will be set using NgModel and Should be hidden.
