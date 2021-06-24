import { Component, OnInit } from "@angular/core";
import { CustomerService } from "src/app/shared/customer.service";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent implements OnInit {
  products;
  constructor(private _customer: CustomerService) {
    this._customer.loadCustomer().subscribe((result) => {
      console.log(result);
      this.products = result;
    });
  }

  ngOnInit(): void {}
}
