import { AddMapPage } from "./add-map.page";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { GoogleMapsModule } from "@angular/google-maps";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { AddMapPageRoutingModule } from "./add-map-routing.module";

@NgModule({
  declarations: [AddMapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    FormsModule,
    CommonModule,
    GoogleMapsModule,
    AddMapPageRoutingModule,
  ],
})
export class AddMapPageModule {}
