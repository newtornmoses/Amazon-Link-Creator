import { AmazonLinksComponent } from './amazon-links/amazon-links.component';
import { AffiliatesComponent } from './affiliates/affiliates.component';
import { AffiliatePostbacksComponent } from './affiliate-postbacks/affiliate-postbacks.component';
import { AddPostbackComponent } from './add-postback/add-postback.component';
import { APIComponent } from './api/api.component';
import{AddAffiliateComponent} from './add-affiliate/add-affiliate.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: ' ', redirectTo:'amazon-links',  pathMatch:'full'},
  // {path:'/', component: AmazonLinksComponent},
  {path:'amazon-links', component: AmazonLinksComponent},
  // {path:'dashboard',  component: APIComponent},
  {path:'add-postback', component: AddPostbackComponent},
  {path:'postbacks', component: AffiliatePostbacksComponent},
  {path:'affiliates', component: AffiliatesComponent},
  {path:'add-affiliate', component: AddAffiliateComponent},
  {path: '**',  component: AmazonLinksComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
