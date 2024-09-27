import { Component } from '@angular/core';
import { ProductChildComponent } from "../product-child/product-child.component";
import { IProduct } from '../../Models/product';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CardNumberPipe } from '../../Pipes/card-number.pipe';

@Component({
  selector: 'app-product-parent',
  standalone: true,
  imports: [ProductChildComponent,FormsModule,CommonModule,CardNumberPipe],
  templateUrl: './product-parent.component.html',
  styleUrl: './product-parent.component.scss'
})
export class ProductParentComponent {

  filterByPrice:number=0;
  totalPrice:number=0;
  visaCard:string="1000100010001000" ;
  cart:IProduct[]=[]



  cartFunc(newProd:IProduct){
    let checkProd = this.cart.find((prod)=> prod.id == newProd.id)
    if(checkProd){
      checkProd.count++
    }
    else{
      this.cart.push(newProd)
    }
    this.calcTotalPrice()



  }

  calcTotalPrice(){
    let total = this.cart.flatMap((prod)=> (prod.price * prod.count))
     this.totalPrice = total.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
////////////////////////////////////


  }













}
