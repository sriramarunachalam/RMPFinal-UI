import { Component, OnInit } from '@angular/core';
import {Competency} from './compentency.model';
import { OperationsService } from '../operations.service';
import { Accounts } from '../account/account.model';
import {ListOfRequest} from "../list-of-request/ListOfRequest.model";

@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {
  OnProjectEmployees: Competency[];
  SingleAccountRequest: Accounts;
  ShowRequest = false;
  filteredProducts: Competency[] = [];
  CompetencyRequests: ListOfRequest[] = [];
  showTable = false;
  showEmployees = false;
  _listFilter: string;

  products: Competency[] = [];
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData) => {
        this.OnProjectEmployees = ProjectData
        this.filteredProducts = ProjectData
        console.log(this.filteredProducts);
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

  OnBench() {
    this.showTable = false;
    this.showEmployees = true;
    this.operationService.GetOnBenchEmployees().subscribe(
      (OnBenchData) => {
        this.filteredProducts = OnBenchData;
      });
  }

  OnProject() {
    this.showTable = false;
    this.showEmployees = true;
    this.operationService.GetProjectEmployees().subscribe(
      (ProjectData) => {
        this.filteredProducts = ProjectData;
      });
  }
  OnTraining() {
    this.showTable = false;
    this.showEmployees = true;
    this.operationService.GetOnTraningEmployees().subscribe(
      (OnTrainingData) => {
        this.filteredProducts = OnTrainingData;
      });

  }

  DisplayRequests() {
    this.showEmployees = false;
    this.showTable = !this.showTable;
    this.operationService.GetCompetencyRequests()
      .subscribe((Data) => {
        console.log(Data); this.CompetencyRequests = Data; });

  }


}
