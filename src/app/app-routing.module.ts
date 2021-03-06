import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/pages/about/about.component";
import { ContactComponent } from "./components/pages/contact/contact.component";
import { CustomerRegistrationComponent } from "./components/pages/customer-registration/customer-registration.component";
import { HomeComponent } from "./components/pages/home/home.component";
import { PagenotfoundComponent } from "./components/pages/pagenotfound/pagenotfound.component";
import { ProductEditComponent } from "./components/pages/product-edit/product-edit.component";
import { ProductListComponent } from "./components/pages/product-list/product-list.component";
import { ProductregComponent } from "./components/productreg/productreg.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "customer", component: CustomerRegistrationComponent },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "products", component: ProductregComponent },
  { path: "products-list", component: ProductListComponent },
  { path: "products-edit/:id", component: ProductEditComponent },
  { path: "**", component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
