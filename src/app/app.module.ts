import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {ProductDetailWrapper} from './product-detail/product-detail.component';
import {ProductDetailDescription} from './product-description/product-description.component';
import {SellerInforComponent} from './seller-infor/seller-infor.component';
import {GlobalNavigationComponent} from './global-navigation/global-navigation.component';
import {HelloComponent} from './hello/hello.component';
import {routes} from './route.component';
import { ThirdComponent } from './third/third.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {thirdDeactivateService} from './third/third-deactivate';




@NgModule({
  declarations: [
    AppComponent,
    ProductDetailWrapper,
    ProductDetailDescription,
    SellerInforComponent,
    GlobalNavigationComponent,
    HelloComponent,
    ThirdComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
    // RouterModule.forRoot(routes, {useHash : true})
  ],
  providers: [AuthGuardService, thirdDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
