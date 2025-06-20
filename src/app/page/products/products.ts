import { Component } from '@angular/core';
import { ApiServices } from '../../apiservices';
import { Product } from "../../card/card";

@Component({
  selector: 'app-products',
  imports: [Products],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {products:any[]=[];constructor (private apiService:ApiServices){}
ngoninit() {
  this.apiService.getproduct().subscribe((data:any)=>{
    this.products = data;
  console.log(data);
});
}

}
