import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  cityName = "Delhi";
  temp = 0;
  min = 0;
  max = 0;
  URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&appid=c34c51aae4e0ce88c69bf8f7108ee2a6
`;
  constructor(private _http: HttpClient) {}

  ngOnInit(): void {}
  submit(data: NgForm) {
    console.log(data.value);
    this._http.get(this.URL).subscribe((result: any) => {
      console.log(result);
      this.temp = result.main.temp;
      this.max = result.main.temp_max;
      this.min = result.main.temp_min;
    });
  }
}
