import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {

  products: any;
  constructor(private route:ActivatedRoute, private httpService: HttpService, private router: Router) { 
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd) { 
        if (this.route.children.length === 0) {
          this.getProducts();
        }
      }
    });
  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnChanges() {
    this.getProducts();
  }

  getProducts() {
    this.httpService.getproducts().subscribe(response => {
      this.products = response;
      console.log("object")
    })
  }

}
