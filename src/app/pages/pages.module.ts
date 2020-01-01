import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './public/home/home.component';
import { RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './public/login/login.component';
import { RegisterComponent } from './public/register/register.component';
import { ProfileComponent } from './secured/profile/profile/profile.component';
import { PostProductComponent } from './secured/post-product/post-product.component';
import {MatLoaderModule} from '../mat-loader.module';
import { ProductDetailComponent } from './public/product-detail/product-detail.component';
import { ProductListingComponent } from './public/product-listing/product-listing.component';
import { EditProfileComponent } from './secured/edit-profile/edit-profile.component';
import { ForgotPasswordComponent } from './public/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './public/reset-password/reset-password.component';
import { ChangePasswordComponent } from './secured/change-password/change-password.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'post-product', component: PostProductComponent },
  { path: 'product-detail', component: ProductDetailComponent},
  { path: 'product-listing', component: ProductListingComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'forgot-password/reset-password', component: ResetPasswordComponent }
]


@NgModule({
  declarations: [HomeComponent, LoginComponent, RegisterComponent, ForgotPasswordComponent, ProfileComponent,
     PostProductComponent, ProductListingComponent, ProductDetailComponent, EditProfileComponent, ResetPasswordComponent,
      ChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatLoaderModule
  ]
})
export class PagesModule { }
