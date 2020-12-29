import { APIService } from './../Services/api.service';
import { Component, OnInit} from '@angular/core';
// import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-conversions-filter',
  templateUrl: './conversions-filter.component.html',
  styleUrls: ['./conversions-filter.component.css']
})
export class ConversionsFilterComponent implements OnInit {
selected_Affiliate:string;

  constructor(private service: APIService) { }

  current_conversions(e) {
    this.service.conversionsTime.next(e)
  }


 

  ngOnInit() {
    this.service.$Selected_affiliatesObs.subscribe(data=>{
      data.map(elem => this.selected_Affiliate =elem.name);
    });
  }

}
