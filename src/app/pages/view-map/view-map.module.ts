import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { ViewMapPage } from "./view-map.page";
import { CommonModule } from "@angular/common";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { ViewMapPageRoutingModule } from "./view-map-routing.module";

@NgModule({
  declarations: [ViewMapPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, FormsModule, IonicModule, ViewMapPageRoutingModule],
})
export class ViewMapPageModule {}
