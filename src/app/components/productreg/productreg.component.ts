import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms'
@Component({
  selector: 'app-productreg',
  templateUrl: './productreg.component.html',
  styleUrls: ['./productreg.component.css']
})
export class ProductregComponent implements OnInit {
  country: { id: number; name: string; }[];

productdata:FormGroup;
  constructor() { 
      this.country=[
      {id:1,'name':'India'},
      {id:2,'name':'USA'},
      {id:3,'name':'China'},
      {id:4,'name':'Japan'},
      {id:5,'name':'Indonesiya'},
      {id:6,'name':'Russiya'},
      
    ]
  }

  ngOnInit(): void {

    this.productdata=new FormGroup({
      name:new FormControl('', Validators.compose([Validators.required,Validators.minLength(4),Validators.maxLength(20)])),
      email:new FormControl('' ,[Validators.required, Validators.email]),
      mobile:new FormControl('', [Validators.required, Validators.pattern("^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$")]),
      password:new FormControl('', [Validators.required]),
      confirmPassword:new FormControl('', [Validators.required]),
    
    })
  }

  
   submit(){
      console.log(this.productdata)
    }
}
