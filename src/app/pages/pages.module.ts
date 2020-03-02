import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './public/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ProfileComponent } from './secured/profile/profile/profile.component';
import { PostProductComponent } from './secured/post-product/post-product.component';
import { MatLoaderModule } from '../mat-loader.module';
import { ProductDetailComponent } from './public/product-detail/product-detail.component';
import { ProductListingComponent } from './public/product-listing/product-listing.component';
import { EditProfileComponent } from './secured/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { ChangePasswordComponent } from './secured/change-password/change-password.component';
import { FeedbackComponent } from './public/feedback/feedback.component';
import { ImageUploadComponent } from './secured/image-upload/image-upload.component';
import { BidComponent } from './secured/bid/bid.component';
import { AboutUsComponent } from './public/about-us/about-us.component';
import { HelpComponent } from './public/help/help.component';
import { FormsModule } from '@angular/forms';
import { ManageProductComponent } from './secured/manage-product/manage-product.component';
import { CartComponent } from './secured/cart/cart.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post-product', component: PostProductComponent },
  { path: 'product-listing/product-detail', component: ProductDetailComponent},
  { path: 'profile/edit-profile', component: EditProfileComponent},
  { path: 'profile/edit-profile/change-password', component: ChangePasswordComponent },
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password/reset-password', component: ResetPasswordComponent },
  { path: 'image-upload', component: ImageUploadComponent } ,
  { path: 'product-listing/product-detail/bid', component: BidComponent} ,
  { path: 'feedback', component: FeedbackComponent} ,
  { path: 'about-us', component: AboutUsComponent} ,
  { path: 'help', component: HelpComponent} ,
  { path: 'cart', component: CartComponent}
];


@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ProfileComponent,
     PostProductComponent, ProductListingComponent, ProductDetailComponent, EditProfileComponent, ResetPasswordComponent,
      ChangePasswordComponent,
      FeedbackComponent,
      ImageUploadComponent,
      BidComponent,
      AboutUsComponent,
      HelpComponent,
      ManageProductComponent,
      CartComponent
      ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatLoaderModule,
    FormsModule
  ]
})
export class PagesModule { }
