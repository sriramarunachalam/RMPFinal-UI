import { Component, OnInit } from '@angular/core';
import {Competency} from '../competency/compentency.model';
import { OperationsService } from '../operations.service';
import { Accounts } from '../account/account.model';
@Component({
  selector: 'app-rmg',
  templateUrl: './rmg.component.html',
  styleUrls: ['./rmg.component.css']
})
export class RMGComponent implements OnInit {
  OnProjectEmployees: Competency[];

  SingleAccountRequest: Accounts;
  ShowRequest = false;
  filteredProducts: Competency[];

  products: Competency[] = [];
  // DisplayCard: boolean = false;
  DisplaySingleAccount: Competency;

  CompanyAccounts: Accounts[] = [];
  _listFilter: string;

  DisplayAccount(SingleAccount: Competency) {
    // this.DisplayCard = true;
    this.DisplaySingleAccount = SingleAccount;
  }
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.GetOnTraningEmployees().subscribe(
      (OnTrainingData) => {
        this.OnProjectEmployees = OnTrainingData
        this.filteredProducts = this.OnProjectEmployees;
      });

  }

  get listFilter(): string {
    return this._listFilter;
}
set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this._listFilter ? this.performFilter(this.listFilter) : this.OnProjectEmployees;
}

performFilter(filterBy: string): Competency[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.filteredProducts.filter((OnProjectEmployees: Competency) =>
    OnProjectEmployees.employeeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}

OnTraining(){
  this.operationService.GetOnTraningEmployees().subscribe(
    (OnTrainingData) => {
      this.filteredProducts = OnTrainingData;
    });
  }
  DisplayIncomingRequest() {
    this.ShowRequest = !this.ShowRequest;
    //this.SingleAccountRequest = this.operationService.DisplayAccountsRequest();
    console.log(this.SingleAccountRequest);
}
}
