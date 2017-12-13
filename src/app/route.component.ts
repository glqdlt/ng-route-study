import {Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';
import {ProductDetailWrapper} from './product-detail/product-detail.component';
import {SellerInforComponent} from './seller-infor/seller-infor.component';
import {ProductDetailDescription} from './product-description/product-description.component';
import {ThirdComponent} from './third/third.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardService} from './auth-guard.service';
import {thirdDeactivateService} from './third/third-deactivate';

export const routes: Routes =
  [{path: '', component: HelloComponent, pathMatch: 'full'},
    {path: 'third', component: ThirdComponent, canDeactivate : [thirdDeactivateService]},
    {
      path: 'product', component: ProductDetailWrapper, canActivate : [AuthGuardService], children: [
        {path: '', component: ProductDetailDescription, pathMatch : 'full'},
        {path: 'seller/:id', component: SellerInforComponent}
      ]
    },
    {path: '**', component : PageNotFoundComponent}
  ];



