import { Component } from '@angular/core';
import { ApiServices } from '../apiservices';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Product {
  products:any[]=[]; constructor(private apiServices:ApiServices) {}
    ngOnInit(){
      this.apiServices.getproduct().subscribe((data:any)=>{
    this.products=data;
    console.log(data);
  });
}
}