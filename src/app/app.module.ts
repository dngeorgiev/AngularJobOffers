// Import Angular modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Import components
import { AppComponent } from './app.component';
import { HeaderComponent } from './_shared/header/header.component';
import { NavigationComponent } from './_shared/navigation/navigation.component';
import { FooterComponent } from './_shared/footer/footer.component';

// Import project modules
import { AppRoutingModule } from './app-routing.module';

// Import third-party modules
import { NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
