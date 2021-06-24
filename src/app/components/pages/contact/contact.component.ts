import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ContactMeta } from 'src/app/utils/validators/meta';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _title:Title,private _meta:Meta) {
        this._title.setTitle("contact us")
        this._meta.addTag({name:ContactMeta.title, content:ContactMeta.content})

   }

  ngOnInit(): void {
  }

}
