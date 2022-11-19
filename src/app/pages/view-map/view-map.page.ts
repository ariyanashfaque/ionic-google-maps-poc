import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { MapService } from "src/app/services/map.service";

@Component({
  selector: "app-view-map",
  templateUrl: "./view-map.page.html",
  styleUrls: ["./view-map.page.scss"],
})
export class ViewMapPage implements OnInit {
  @ViewChild("map") mapRef: ElementRef;

  constructor(
    private mapService: MapService,
    private modalCrtl: ModalController
  ) {}

  ngOnInit() {}

  async handleViewMap() {
    // this.mapService.modeView = true;
    await this.mapService.getCurrentPosition();
    if (this.mapService.position) {
      // await this.mapService.createMap(this.mapRef);
    }
  }
}
