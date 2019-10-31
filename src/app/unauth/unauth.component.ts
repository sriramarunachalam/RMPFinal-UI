import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unauth',
  template: `
    <div class="alert alert-danger">
      You don't have permission for this page!
    </div>
  `,
  styles: []
})
export class UnauthComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
