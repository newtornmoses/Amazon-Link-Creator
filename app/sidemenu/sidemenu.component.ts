import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  items =[];

    ngOnInit() {
        this.items = [
            { label: 'Arabclicks Postback'},   
        { label: 'Affiliates', icon: 'pi pi-fw pi-users',
        items: [
              
            {
                label: 'Add Affiliate',
              
            },
            {
                label: 'All Affiliates',
               
            },
        
        
            {
                label: 'Active affiliates',
               
            },
            {
                label: 'Pending Affiliates',
               
            }
        
    ]
      },

      {
        label: 'Amazon Links', icon: '',
        items: [
            
            {
                label: 'Generate Links',
              
            },
            {
                label: 'All Links',
               
            },
          
        ]
    },


      {
          label: 'Postbacks', icon: 'pi pi-fw pi-chart-line',
          items: [
              
            {
                label: 'Add Postback',
              
            },
            {
                label: 'All Postbacks',
               
            },
        
        
            {
                label: 'Add Image/IFrame Pixel',
               
            },
            {
                label: 'All pixels',
               
            }
        
    ]
      },
      {
          label: 'Events', icon: 'pi pi-fw pi-calendar',
          items: [
              
                  {
                      label: 'Event Logs',
                    
                  },
                  {
                      label: 'Event files',
                     
                  },
              
              
                  {
                      label: 'Successfull Calls',
                     
                  },
                  {
                      label: 'Failed Calls',
                     
                  }
              
          ]
       }

    
      ]
    

    }}
