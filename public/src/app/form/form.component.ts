import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  product: any;
  msg: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.product = {
      title: null,
      price: null,
      imgUrl: null,
    }
    this.msg = {
      title: null,
      price: null,
      imgUrl: null,
    }

  }

  createProduct() {
    this._httpService.create(this.product).subscribe(response => {

      if (response["errors"]) {
        this.msg = response["errors"]
        console.log(this.msg)
      } else {
        this.msg = "Successfully Updated!!";
        console.log({response})
      }
      this.product = {
        title: null,
        price: null,
        imgUrl: null,
      }
    })
  }
}
