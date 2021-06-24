import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HomeMeta } from 'src/app/utils/validators/meta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _title:Title, private _meta:Meta) {
    this._title.setTitle("Home")
    this._meta.addTag({name:HomeMeta.title,content:HomeMeta.content})
   }

  ngOnInit(): void {
  }

}
