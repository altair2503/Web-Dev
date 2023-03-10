import {Component, Input, Output} from '@angular/core';
import {Product, products} from '../products';
import {Category} from "../category";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {

  @Input() category: string | undefined

  products = products;

  remove(removeID: number){
    this.products = this.products.filter( (x) =>x.id !== removeID)
    console.log(this.products)
  }



}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/