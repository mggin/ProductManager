import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route: ActivatedRoute, private httpService: HttpService, private router: Router) { }
  productId: string;
  product: Object;
  msg: any;
  ngOnInit() {
    this.route.params.subscribe(param => {
      this.productId = param["productId"]
      this.getProduct(this.productId)
    })

    this.msg = {
      title: null,
      price: null,
      imgUrl: null,
    }

  }

  getProduct(productId: string) {
    this.httpService.getproduct(productId).subscribe(product => {
      this.product = product;
    })
  }

  deleteProduct() {
    this.httpService.delete(this.productId)
    .subscribe(res => {
      console.log({res})
      
    })
    this.router.navigate(['/products'])
  }

  updateProduct() {
    this.httpService.update(this.productId, this.product).subscribe(response => {
      if (response["errors"]) {
        this.msg = response["errors"]
        console.log(this.msg)
      } else {
        this.msg = "Successfully Updated!!";
        console.log({response})
        this.router.navigate(['/products'])
      }
    })
    
  }

}
