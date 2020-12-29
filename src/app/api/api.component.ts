import { APIService } from './../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class APIComponent implements OnInit {
public conversions: []= [];
value: Date;
items = []
  constructor(public ApiService: APIService) { }

  // Conect to the API
API_Connect() {

// this.ApiService.APICall().subscribe(results => {
// const output = results['response'].data.data;
// this.conversions = output
// console.log(this.conversions)
// }
  
// );
}


  ngOnInit() {
this.API_Connect();

  }
}
