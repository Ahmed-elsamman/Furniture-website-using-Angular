import { StaticProductService } from "./../Service/static-product.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Route, Router } from "@angular/router";
import { IProduct } from "../../Models/product";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-product-details",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./product-details.component.html",
  styleUrl: "./product-details.component.scss",
})
export class ProductDetailsComponent implements OnInit {
  currentProductID = 0;
  product: IProduct | undefined;
  IDs: number[]=[];
  currentIndexOfProduct: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private StaticProductService: StaticProductService,
    private router: Router
  ) {
    this.IDs = this.StaticProductService.getIds();
    console.log(this.IDs);
  } // => /constructor

  ngOnInit(): void {
    // let foundPrd = Number(
    //   this.activatedRoute.snapshot.paramMap.get("productID")
    // );
    // console.log(this.currentProductID);
    // if (foundPrd) {
    //   this.currentProductID = foundPrd;
    //   this.product = this.StaticProductService.getProductByID(
    //     this.currentProductID
    //   );
    // } else {
    //   this.router.navigate(["**"]);
    // }
    this.activatedRoute.paramMap.subscribe((observer) => {
      this.currentProductID = Number(observer.get("productID"));

      let foundProduct = this.StaticProductService.getProductByID(this.currentProductID);

      if (foundProduct) {
        this.product = foundProduct;
      } else {
        this.router.navigate(["**"]);
      }
    });
  } // => /ngOnInit

  PrevuesPrd() {
    this.currentIndexOfProduct = this.IDs.indexOf(this.currentProductID);
    this.router.navigate(["/prd", this.IDs[--this.currentIndexOfProduct]]);
    // console.log(this.currentIndexOfProduct);
    if (this.currentIndexOfProduct <= 0) {
      this.router.navigate(["/prd", this.IDs[this.IDs.length - 1]]);
    }
  }

  nextPrd() {
    this.currentIndexOfProduct = this.IDs.indexOf(this.currentProductID);
    // console.log(this.currentIndexOfProduct);
    this.router.navigate(["/prd", this.IDs[++this.currentIndexOfProduct]]);

  }
} // => /class
