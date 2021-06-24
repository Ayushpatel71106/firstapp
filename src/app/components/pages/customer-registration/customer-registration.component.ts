import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { from } from "rxjs";
import { CustomerService } from "src/app/shared/customer.service";
import { CustomerModel } from "../../../models/customer";
import { ToastrService } from "ngx-toastr";
@Component({
  selector: "app-customer-registration",
  templateUrl: "./customer-registration.component.html",
  styleUrls: ["./customer-registration.component.css"],
})
export class CustomerRegistrationComponent implements OnInit {
  customer: CustomerModel;
  country: any;
  customers: CustomerModel[];
  modal_title = "Add Customer";
  button_text = "SignUp";
  constructor(
    private _customer: CustomerService,
    private _toastr: ToastrService
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
    this.resetForm();
    this.getAllCustomer();
  }

  getAllCustomer() {
    this._customer.loadCustomer().subscribe((result: CustomerModel[]) => {
      //  console.log(result);
      this.customers = result;
    });
  }
  submit(data: NgForm) {
    // console.log(data);
    if (this.button_text == "SignUp") {
      this._customer.createCustomer(data.value).subscribe((result: any) => {
        if (result) {
          this.getAllCustomer();
          this.resetForm(data);
        }
      });
    } else if (this.button_text == "Update") {
      this._customer.updateCustomer(data.value).subscribe((result: any) => {
        if (result) {
          this._toastr.success("Customer Updated successfully...", "Update");
          this.getAllCustomer();
          this.resetForm(data);
        }
      });
    }
  }

  resetForm(frm?: NgForm) {
    if (frm != null) frm.resetForm();

    this.customer = {
      address: "",
      name: "",
      email: "",
      mobile: "",
      confirmPassword: "",
      country: null,
      id: null,
      password: "",
    };
  }

  deletecustomer(id) {
    event.preventDefault();
    this._customer.deleteCustomer(id).subscribe((result) => {
      console.log(result);
      this._toastr.success("Customer deleted sucessfully", "Customer");
      this.getAllCustomer();
    });
  }

  edit(customer) {
    event.preventDefault();
    this.button_text = "Update";
    this.modal_title = "Update Customer";
    //console.log(customer);
    Object.assign(this.customer, customer);
  }
}
