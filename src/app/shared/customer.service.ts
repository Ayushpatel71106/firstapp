import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CustomerModel } from "../models/customer";
import { EndPoint } from "../utils/endPints";
import { BaseURL } from "../utils/validators/base_route";
import { ICustomer } from "./ICustomer";

@Injectable({
  providedIn: "root",
})
export class CustomerService implements ICustomer {
  url = "http://localhost:3000/customers";
  constructor(private _http: HttpClient) {}
  loadCustomer() {
    return this._http.get(this.url);
  }
  createCustomer(model: CustomerModel) {
    return this._http.post(this.url, model);
  }
  deleteCustomer(id: number) {
    return this._http.delete(this.url + "/" + id);
  }
  updateCustomer(model: CustomerModel) {
    let id = model.id;
    return this._http.put(this.url + "/" + id, model);
  }

  loadToDo(callback) {
    this._http.get(`${BaseURL}${EndPoint.TODOS}`).subscribe((result) => {
      callback(result);
    });
  }
}
