import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CustomerService } from "src/app/shared/customer.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"],
})
export class ProductEditComponent implements OnInit {
  country: { id: number; name: string }[];
  product;
  productdata: FormGroup;
  constructor(
    private _customer: CustomerService,
    private _router: Router,
    private _activated: ActivatedRoute
  ) {
    this.country = [
      { id: 1, name: "India" },
      { id: 2, name: "USA" },
      { id: 3, name: "China" },
      { id: 4, name: "Japan" },
      { id: 5, name: "Indonesiya" },
      { id: 6, name: "Russiya" },
    ];
  }

  ngOnInit(): void {
    this.productdata = new FormGroup({
      id: new FormControl(""),
      name: new FormControl(
        "",
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ])
      ),
      email: new FormControl("", [Validators.required, Validators.email]),
      mobile: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$"
        ),
      ]),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required]),
      country: new FormControl("", [Validators.required]),
      address: new FormControl("", [Validators.required]),
    });
    //console.log(this.product);
    // this.productdata.setValue({ ...this.product });
    this._activated.params.subscribe((param) => {
      // console.log(param);
      const id = param["id"];
      this._customer.getcustomerById(id).subscribe((result: any) => {
        this.productdata.setValue({
          ...result,
          confirmPassword: result.password,
        });
        console.log(result);
      });
    });
  }

  submit() {
    console.log(this.productdata);
    this._customer
      .updateCustomer(this.productdata.value)
      .subscribe((result: any) => {
        if (result) {
          this._router.navigate(["/products-list"]);
        }
      });
  }
}
