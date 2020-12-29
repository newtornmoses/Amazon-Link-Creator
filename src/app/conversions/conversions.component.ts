import { APIService } from './../Services/api.service';
import { Component, OnInit } from '@angular/core';
import   moment  from 'moment';

@Component({
  selector: 'app-conversions',
  templateUrl: './conversions.component.html',
  styleUrls: ['./conversions.component.css']
})
export class ConversionsComponent implements OnInit {
  conversions = [];
  conversion_copy = [];
  hrs
  DemoApi = 'bb3efe1e94b36a0c03a02a6c7001596cd6780a41ce8d6d0434aac4c52010b1f4';
 API_Key = 'e9adc19edce7bb08531793a11fdf011e874d9eebf924b79ab978fb9d00c0884a';
 today =moment().add(0, 'days').format().slice(-26,10).toString();
 now_hr = Number(moment().subtract(2, 'days').format().slice(11,-12)).toString();
 last_hr =Number(moment().subtract(60, 'minutes').format('HH:mm').slice(0,-3) ).toString();
 last_half =Number(moment().subtract(3600, 'minutes').format('HH:mm').slice(0,-3) ).toString();

  constructor(private service: APIService) {}

// Api call for Conversions
    GetConversions() {
     this.service.APICall(this.API_Key).subscribe(data => {
       this.conversions = data['response'].data.data;
      this.conversion_copy =[...this.conversions]
     });
    }

    // Api call for Selected Conversions
    Get_SelectedConversions(key) {
      this.service.APICall(key).subscribe(data => {
        this.conversions = data['response'].data.data;
       this.conversion_copy =[...this.conversions]
      });
     }
 

    //Make API Call per HR
   APICall_Hr(data) {
    // this.conversion_copy =[...this.conversions]
    if(data == 'Current') {
      this.conversions =this.conversion_copy.filter(elem => Number(elem.Stat['datetime'].slice(11,-6))== Number(this.now_hr))

     } else if(data == 'Last') {
    this.conversions =this.conversion_copy.filter(elem => Number(elem.Stat['datetime'].slice(11,-6))== Number(this.last_hr))
     }
     else if(data == 'Last half') {
      this.conversions =this.conversion_copy.filter(elem => Number(elem.Stat['datetime'].slice(11,-6)) <= Number(this.last_half))
       } else {
     this.conversions =this.conversion_copy;
     }
  
   }



  ngOnInit() {
    this. GetConversions();    
    this.service.$conversionTimeObs.subscribe(data=>this.APICall_Hr(data));
    this.service.$Selected_affiliatesObs.subscribe(data=>{
      data.map(elem => this.Get_SelectedConversions(elem.API_Key))
    });
  
  }

}
