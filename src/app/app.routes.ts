import { Routes } from '@angular/router';
import { ProductParentComponent } from './Component/product-parent/product-parent.component';
import { Title } from '@angular/platform-browser';
import { ProductChildComponent } from './Component/product-child/product-child.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotFoundComponent } from './Component/not-found/not-found.component';
import { SideMenuComponent } from './Component/side-menu/side-menu.component';
import { ProductDetailsComponent } from './Component/product-details/product-details.component';
import { OffersComponent } from './Component/offers/offers.component';


export const routes: Routes = [
  // Role in this case ===> First Path Match

  //1- default Path
  {path:'',component:ProductParentComponent, title:'Product Page '},

  {path:'Home',component:ProductChildComponent, title:'Products  '},
  {path:'Product',component:ProductParentComponent, title:'Product Page '},
  {path:'side-Menu',component:SideMenuComponent, title:'Product Page '},
  {path:'prd/:productID',component:ProductDetailsComponent, title:'Product Page '},
  {path:'offers',component:OffersComponent,title:'Offers Page '},

  //wild card Path



//not found page ===> Wild card Path
  {path:'**',component:NotFoundComponent, title:'Not Found  Page '},
];
