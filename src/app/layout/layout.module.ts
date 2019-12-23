import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import {MatLoaderModule} from '../mat-loader.module';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AutocompleteComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatLoaderModule
  ],
  exports : [HeaderComponent, FooterComponent, AutocompleteComponent]
})
export class LayoutModule { }
