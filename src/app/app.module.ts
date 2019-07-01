import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderAppComponent } from './header-app/header-app.component';
import { FooterAppComponent } from './footer-app/footer-app.component';
import { MainAppComponent } from './main-app/main-app.component';
import { DressesAppComponent } from './dresses-app/dresses-app.component';
import { FormsModule } from '@angular/forms';
import {NgxPopperModule} from 'ngx-popper';
import { SelectedDressAppComponent } from './selected-dress-app/selected-dress-app.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MobMenuAppComponent } from './mob-menu-app/mob-menu-app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
@NgModule({
  declarations: [
    AppComponent,
    HeaderAppComponent,
    FooterAppComponent,
    MainAppComponent,
    DressesAppComponent,
    SelectedDressAppComponent,
    MobMenuAppComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPopperModule,
    NgxSmartModalModule.forRoot(),
    SlickCarouselModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
