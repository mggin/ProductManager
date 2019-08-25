import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpService } from '../http.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Output() handleGetProducts = new EventEmitter();
  constructor(private httpService: HttpService) { }

  ngOnInit() {
    
  }

  deleteProduct(productId: string) {
    this.httpService.delete(productId).subscribe(res => {
      this.handleGetProducts.emit();
    })
  }

}
