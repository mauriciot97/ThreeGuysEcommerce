import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { ClothesComponent } from './clothes/clothes.component';
import { PhonesComponent } from './phones/phones.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MessageComponent } from './message/message.component';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'clothes',
    component: ClothesComponent
  },
  {
    path: 'phones',
    component: PhonesComponent
  },
  {
    path: 'main',
    component: MainPageComponent
  },
  {
    path: 'cars',
    component: CartComponent
  },
  {
    path: 'cart',
    component: ShoppingCartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'thankyou',
    component: OrderConfirmationComponent
  },
  {
    path: 'message',
    component: MessageComponent
  }
];

export const AppRoutes = RouterModule.forRoot(appRoutes);
