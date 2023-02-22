import { Component } from '@angular/core';
import {Product, products} from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;

  share(product: { link: string; }) {
    window.open("https://telegram.me/share/url?url=" + product.link + ">&text=<{{product.name}}>")
  }

  stars(num: number, check: boolean): string  {
      var text = "";
      for (let i = 0; i < num; i++) {
          if(check){
              text += '⭐️';
          } else{
              text += '☆'
          }

      }
      return text;
  }

}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/