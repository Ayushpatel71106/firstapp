import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CustomerService } from 'src/app/shared/customer.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
records:any;
  constructor(private _title:Title, private _http:HttpClient, private _customerService:CustomerService) { 
        this._title.setTitle("About us")

  }

  ngOnInit(): void {
    this._customerService.loadToDo(result=>this.records=result)
  }

//  async callApi(callback){
//   let result=await this._http.get('https://jsonplaceholder.typicode.com/todos/').toPromise()
//  callback(result)
//  }

}
