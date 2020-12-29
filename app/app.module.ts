import { ConversionsFilterComponent } from './conversions-filter/conversions-filter.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';
import { APIService } from './Services/api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIComponent } from './api/api.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { AffiliatePostbacksComponent } from './affiliate-postbacks/affiliate-postbacks.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {CalendarModule} from 'primeng/calendar';
import {MenubarModule} from 'primeng/menubar';

import {SlideMenuModule} from 'primeng/slidemenu';
import {ChartModule} from 'primeng/chart';
import { ConversionsComponent } from './conversions/conversions.component';
import {TableModule} from 'primeng/table';
import {MegaMenuModule} from 'primeng/megamenu';
import {TieredMenuModule} from 'primeng/tieredMenu';
import { AddAffiliateComponent } from './add-affiliate/add-affiliate.component';
import { AddPostbackComponent } from './add-postback/add-postback.component';
import { NgSemanticModule } from 'ng-semantic';
import { AmazonLinksComponent } from './amazon-links/amazon-links.component';
@NgModule({
  declarations: [
    AppComponent,
    APIComponent,
    FrontPageComponent,
    AffiliatesComponent,
    AffiliatePostbacksComponent,
    HeaderComponent,
    DashboardComponent,
    ConversionsComponent,
    SidemenuComponent,
    AddAffiliateComponent,
    AddPostbackComponent,
    ConversionsFilterComponent,
    AmazonLinksComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    
    CalendarModule,
    MenubarModule,
    ChartModule,
    TableModule,
    SlideMenuModule,
    MegaMenuModule,
    TieredMenuModule,
    NgSemanticModule
  ],
  providers: [HttpClient, APIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
