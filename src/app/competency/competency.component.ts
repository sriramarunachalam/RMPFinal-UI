import { Component, OnInit } from '@angular/core';
import {Competency} from './compentency.model';
import { OperationsService } from '../operations.service';
import { Accounts } from '../account/account.model';
import {ListOfRequest} from "../list-of-request/ListOfRequest.model";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Employees } from '../list-of-request/Employees.model';


@Component({
  selector: 'app-competency',
  templateUrl: './competency.component.html',
  styleUrls: ['./competency.component.css']
})
export class CompetencyComponent implements OnInit {
  SingleAccountRequest: Accounts;
  ShowRequest = false;
  CompetencyRequests: ListOfRequest[] = [];
  showTable = false;
  showEmployees = false;
  UpdatedRequest: ListOfRequest;
  HandleRequest: ListOfRequest;
  ShowEmployeeForm = false;
  AllEmployees: Employees[] = [];
  hideElement = true;

  EmployeeForm: FormGroup;


  products: Competency[] = [];
  constructor(private operationService: OperationsService) { }

  ngOnInit() {
    this.EmployeeForm = new FormGroup({
      Id: new FormControl(0),
      EmployeeName: new FormControl('', [Validators.required]),
      CurrentProject: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      ContactNumber: new FormControl('', [Validators.required]),
      Experience: new FormControl('', [Validators.required]),
      Technology: new FormControl('', [Validators.required]),
      StartDate: new FormControl('', [Validators.required]),
      RequestID: new FormControl(''),
    })
  }

  get Employee() { 
    return this.EmployeeForm.controls; 
  }

  DisplayRequests() {
    this.showEmployees = false;
    this.showTable = !this.showTable;
    this.operationService.GetCompetencyRequests()
      .subscribe((Data) => {
        console.log(Data); this.CompetencyRequests = Data; });

  }

  AcknowledgeRequest(competencyRequest: ListOfRequest) {
    this.ShowRequest = true;
    this.HandleRequest = competencyRequest;
  }

  AddEmployee() {
    this.ShowEmployeeForm = !this.ShowEmployeeForm;
  }

  CancelCard() {
    this.ShowRequest = !this.ShowRequest;
  }

  InsertEmployee() {
    console.log(this.EmployeeForm.value);
    this.operationService.PostEmployees(this.EmployeeForm.value).subscribe(
      (Data)=> {console.log('Employee Added Succesfully!', Data)});
    this.EmployeeForm.reset();
  }

  ShowEmployees() {
    this.operationService.GetAllEmployees().subscribe(
      (Employees) => {this.AllEmployees = Employees}
      );
  }

  




}
