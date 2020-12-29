import { APIService } from './../Services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
items =[]
affiliates =[]
affiliates_copy =[]
  constructor(private service:APIService) {
this.service.fire_conversiosn().subscribe(res => {
    console.log(res);
    
})
   }

// Get affiliates
get_affiliateData() {
    this.service.$affiliatesObs.subscribe(data => {
        this.affiliates = data;
        this.affiliates_copy = [...this.affiliates]
    
    });
}

// send affiliate Data to Conversions 
show_affiliate_conversions(e) {
    console.log(e);
    
    this.affiliates_copy.filter(elem => {
        if(elem.name == e) {
            const selectedAffiliate = [];
            selectedAffiliate.push(elem)
            this.service.Selected_affiliates.next(selectedAffiliate);
            console.log('api', elem);
            
        }
    })
}
  ngOnInit() {
    
 this.items = [
            {
                label: 'File',
                items: [{
                        label: 'New', 
                        icon: 'pi pi-fw pi-plus',
                        items: [
                            {label: 'Project'},
                            {label: 'Other'},
                        ]
                    },
                    {label: 'Open'},
                    {label: 'Quit'}
                ]
            },
            {
                label: 'Edit',
                icon: 'pi pi-fw pi-pencil',
                items: [
                    {label: 'Delete', icon: 'pi pi-fw pi-trash'},
                    {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
                ]
            }
        ];
  }

    

  
  

}
