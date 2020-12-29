import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import   moment  from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private today = moment().add(1, 'days').format().slice(-26,10);
  private yesterday = moment().subtract(1, 'days').format().slice(-26,10);
  private BaseURL: string = 'https://arabclicks.api.hasoffers.com/Apiv3/json?api_key=';
  
  
  private URLCall =`&Target=Affiliate_Report&Method=getConversions&fields[]=Stat.affiliate_info5&fields[]=Stat.approved_payout&fields[]=Stat.payout&fields[]=Stat.conversion_status&fields[]=Stat.count_approved&fields[]=Stat.affiliate_info4&fields[]=Stat.affiliate_info3&fields[]=Stat.affiliate_info2&fields[]=Stat.ad_id&fields[]=Stat.affiliate_info1&fields[]=Stat.sale_amount&fields[]=Stat.offer_id&fields[]=Stat.currency&fields[]=Stat.datetime&fields[]=Offer.name&fields[]=Browser.display_name&filters[Stat.datetime][conditional]=BETWEEN&filters[Stat.datetime][values][]=${this.yesterday}&filters[Stat.datetime][values][]=${this.today}&sort[Stat.datetime]=desc`;

  conversionsTime = new BehaviorSubject('Current');
  $conversionTimeObs = this.conversionsTime.asObservable();
  affiliates = new BehaviorSubject([]);
  $affiliatesObs = this.affiliates.asObservable();
  Selected_affiliates = new BehaviorSubject([]);
  $Selected_affiliatesObs = this.Selected_affiliates.asObservable();

affilaite_array = [
  {name: 'Brow', API_Key:'bb3efe1e94b36a0c03a02a6c7001596cd6780a41ce8d6d0434aac4c52010b1f4'},
  {name: 'Mark', API_Key:'e9adc19edce7bb08531793a11fdf011e874d9eebf924b79ab978fb9d00c0884a'}

]
  constructor(private http: HttpClient) {
    this.Fetch_affiliates();
    
    
   }



  //Make API Call
  APICall(API_Key) {
   return this.http.get(this.BaseURL+ API_Key +this.URLCall);
  }


  //Get Affiliates
  Fetch_affiliates() {
    this.affiliates.next(this.affilaite_array);
    this.Selected_affiliates.next([this.affilaite_array[0]]);
   }
 
   
   // Fire convesiosn
   fire_conversiosn() {
    return  this.http.get('http://localhost:3000/conversions?amount=44&payout=10&currency=USD&transaction_id=12132323f434434&subID=testaff&subID2=2323233source')
     
   }
}
