import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getproducts() {
    return this._http.get('/products')
  }

  getproduct(productId: string) {
    return this._http.get(`/product/${productId}`)
  }

  create(product: Object) {
    return this._http.post('/new', product)
  }

  update(id: string, product: Object) {
    return this._http.put(`/update/${id}`, product)
  }

  delete(id: string) {
    return this._http.delete(`/remove/${id}`)
  }
}
