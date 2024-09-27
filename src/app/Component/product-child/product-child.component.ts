import { StaticProductService } from './../Service/static-product.service';
import {
  Component,
  EventEmitter,
  Input,
  input,
  OnInit,
  Output,
} from "@angular/core";
import { IProduct } from "../../Models/product";
import { Store } from "../../Models/store";
import { ICategory } from "../../Models/icategory";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { CalcDiscPipe } from "../../Pipes/calc-disc.pipe";
import { BoxshadowDirective } from "../../Directices/boxshadow.directive";
import { RouterModule } from '@angular/router';

@Component({
  selector: "app-product-child",
  standalone: true,
  imports: [FormsModule, CommonModule, CalcDiscPipe, BoxshadowDirective,RouterModule],
  templateUrl: "./product-child.component.html",
  styleUrl: "./product-child.component.scss",
})
export class ProductChildComponent implements OnInit {
  clintName: string = "ahmed Elsamman";
  ProductList: IProduct[] = [];
  flagIgm: boolean = true;
  // flagIgm: boolean[] = [];
  categoryList: ICategory[] = [];
  selectedCatID: number = 0;
  x: number = 0;

  // var of filter function
  productsAfterFilter: IProduct[] = [];

  //event
  @Output() newProductEventAtCart = new EventEmitter<IProduct>();

  //input => get price from parent
  @Input() set getPrice(price: number) {
    this.productsAfterFilter =this.StaticProductService.filterProductsByPrice(price)
    // this.productsAfterFilter = this.filterProductsByPrice(price);
  }

  //use Class  Stor
  stor1: Store = new Store(
    "Podcast Title",
    ["Podcast", "55 mins.", "55 mins."],
    "https://picsum.photos/1000/1000"
  );

  constructor(private StaticProductService:StaticProductService) {
    //use interface ICategory
    this.categoryList = [
      { id: 0, name: "All Product" },
      { id: 1, name: "Table" },
      { id: 2, name: "Chair" },
      { id: 3, name: "TV unit" },
    ];

    //use interface Products
    this.ProductList =this.StaticProductService.getAllProducts()
    // this.ProductList = [
    //   {
    //     id: 1,
    //     name: "Odense 8-Seater Top Dining Table",
    //     price: 21500,
    //     quantity: 0,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/163650487-163650487-HC18082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 1,
    //     Material: "Engineered Wood",
    //     count: 1,
    //   },
    //   {
    //     id: 5,
    //     name: "Trixia 4-Seater Glass Top Dining Table",
    //     price: 30000,
    //     quantity: 8,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/163645951-163645951-HC07102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 1,
    //     Material: "Metal",
    //     count: 1,
    //   },
    //   {
    //     id: 25,
    //     name: "Gasha Marble Top Side Table",
    //     price: 14000,
    //     quantity: 10,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/160079085-160079085-HC020518_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 1,
    //     Material: "Metal",
    //     count: 1,
    //   },
    //   {
    //     id: 7,
    //     name: "Ventura Fabric Dining Chair",
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/161257427-161257427-HC280119_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 2,
    //     Material: "Upholstered Seating",
    //     count: 1,
    //   },
    //   {
    //     id: 17,
    //     name: "Ventura Fabric Dining Chair",
    //     price: 1500,
    //     quantity: 2,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/162640761-162640761-HC23092020_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 2,
    //     Material: "Upholstered Seating",
    //     count: 1,
    //   },
    //   {
    //     id: 9,
    //     name: "Boston Study Chair",
    //     price: 1000,
    //     quantity: 10,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/159671547-159671547-HCB1226OCT17_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 2,
    //     Material: "Upholstered Seating",
    //     count: 1,
    //   },
    //   {
    //     id: 10,
    //     name: "Coby Extendable TV Unit",
    //     price: 13000,
    //     quantity: 0,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/163723189-163568026-HC16082021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 3,
    //     Material: "Wood",
    //     count: 1,
    //   },
    //   {
    //     id: 15,
    //     name: "Accent TV Unit",
    //     price: 36999,
    //     quantity: 4,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/161684469-161684469-HC210519_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 3,
    //     Material: "MDF",
    //     count: 1,
    //   },
    //   {
    //     id: 55,
    //     name: "Plymouth TV Unit",
    //     price: 36999,
    //     quantity: 3,
    //     PrdimgURL:
    //       "https://media.homecentre.com/i/homecentre/163688823-163688823-HC05102021_01-2100.jpg?fmt=auto&$quality-standard$&sm=c&$prodimg-d-sqr-pdp$",
    //     categoryID: 3,
    //     Material: "wood",
    //     count: 1,
    //   },
    // ];
  }
  ngOnInit(): void {
    this.productsAfterFilter = this.ProductList;
  }

  changeIgm(product: IProduct) {
    this.x = product.id;
    this.flagIgm = !this.flagIgm;
  }

  decreaseQuantity(product: IProduct) {
    // console.log(product);

    return product.quantity--;
  }

  //function Filter Products By Price
  // filterProductsByPrice(price: number):IProduct[] {

  //   return this.ProductList.filter((prod:IProduct)=> prod.price = price)}

  // filterProductsByPrice(filterValue: number): IProduct[] {
  //   // filterValue = filterValue.toLowerCase();
  //   filterValue = filterValue;

  //   return this.ProductList.filter((prd: IProduct) => prd.price <= filterValue);
  // }

  addToCart(prod: IProduct) {
    this.newProductEventAtCart.emit(prod);
    console.log(prod);
  }
}
