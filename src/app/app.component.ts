import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Component/header/header.component";
import { ProductParentComponent } from "./Component/product-parent/product-parent.component";
import { FooterComponent } from "./Component/footer/footer.component";
import { SideMenuComponent } from "./Component/side-menu/side-menu.component";
import { NotFoundComponent } from "./Component/not-found/not-found.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ProductParentComponent, FooterComponent, SideMenuComponent, NotFoundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Ecommerce-Project';
}
