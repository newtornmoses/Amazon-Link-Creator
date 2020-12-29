import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amazon-links',
  templateUrl: './amazon-links.component.html',
  styleUrls: ['./amazon-links.component.css']
})
export class AmazonLinksComponent implements OnInit {
 links =[
   'https://go.arabclicks.com/aff_c?offer_id=705',
   'https://go.arabclicks.com/aff_c?offer_id=287',
   'https://go.arabclicks.com/aff_c?offer_id=818',
   'https://go.arabclicks.com/aff_c?offer_id=817'
 ];
 input_field_link= '';
 affiliate_id = '';
 tag_id ='';
 completeLink='';
 offer_id ='';
 store = 'Amazon UAE';
 webhook = 'https://hooks.zapier.com/hooks/catch/4680059/oew5pb7/?store=';
  constructor() { 
    this.input_field_link = this.links[1]
    this.completeLink = this.links[1];

  }


  selectedField(e) {
    if(e.target.value == 'KSA'){
      this.input_field_link = this.links[0];
      this.completeLink = this.input_field_link;
      this.offer_id = this.links[0].split('=')[1];
      this.store = 'Amazon KSA';
    }else if (e.target.value == 'UAE') {
      this.input_field_link= this.links[1];
      this.completeLink = this.input_field_link;
      this.offer_id = this.links[1].split('=')[1];
      this.store = 'Amazon UAE';

    }else if (e.target.value == 'Prime') {
      this.input_field_link= this.links[2];
      this.completeLink = this.input_field_link;
      this.offer_id = this.links[2].split('=')[1];
      this.store = 'Amazon Prime';

    }else{
      this.input_field_link= this.links[3];
      this.completeLink = this.input_field_link;
      this.offer_id = this.links[3].split('=')[1];
      this.store = 'Amazon Home Services';

    }
  }

  copytoClipboard() {
      const finallink = this.completeLink+'&aff_id='+ this.affiliate_id+'&aff_sub='+this.tag_id+'-21';
      fetch(this.webhook+ this.store+  "&offer_link="+finallink+'&affiliate_id=' +this.affiliate_id+'&tag='+this.tag_id+'-21').then(data=> console.log(data));
      const selBox = document.createElement('textarea');
      selBox.style.position = 'fixed';
      selBox.style.left = '0';
      selBox.style.top = '0';
      selBox.style.opacity = '0';
      selBox.value = finallink;
      document.body.appendChild(selBox);
      selBox.focus();
      selBox.select();
      document.execCommand('copy');
      document.body.removeChild(selBox);

  }
  ngOnInit() {
  }

}
