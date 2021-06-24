import { CustomerModel } from "../models/customer";

export interface ICustomer {
  loadCustomer(): any;
  createCustomer(model: CustomerModel): any;
  deleteCustomer(id: number): any;
  updateCustomer(model: CustomerModel): any;
  getcustomerById(id: number): any;
}
