import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomerRegistrationComponent } from "./components/pages/customer-registration/customer-registration.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ConfirmPasswordDirective } from "./utils/validators/confirm-password.directive";
import { ProductregComponent } from "./components/productreg/productreg.component";
import { HeaderComponent } from "./components/pages/header/header.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { PagenotfoundComponent } from "./components/pages/pagenotfound/pagenotfound.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ngx-toastr";
import { ProductListComponent } from './components/pages/product-list/product-list.component';
import { ProductEditComponent } from './components/pages/product-edit/product-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    ConfirmPasswordDirective,
    ProductregComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    PagenotfoundComponent,
    ProductListComponent,
    ProductEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
