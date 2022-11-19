import { ModalController, Platform } from "@ionic/angular";
import { MapService } from "src/app/services/map.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-add-map",
  templateUrl: "./add-map.page.html",
  styleUrls: ["./add-map.page.scss"],
})
export class AddMapPage implements OnInit {
  @ViewChild("map") mapRef: ElementRef;

  zoom = 4;
  nativeDevice: boolean = false;
  center: google.maps.LatLngLiteral = { lat: 24, lng: 12 };

  constructor(private platform: Platform, private mapService: MapService) {}

  ngOnInit() {
    if (this.platform.is("android") || this.platform.is("ios")) {
      this.nativeDevice = true;
    }
    this.mapService.getCurrentPosition();
  }

  ionViewDidEnter() {}

  async handleAddWebMap() {
    // this.mapService.getCurrentPosition();
    if (this.mapService.position) {
      this.mapService.createMapForWeb(this.mapRef);
    }
  }
  async handleAddDeviceMap() {
    // this.mapService.getCurrentPosition();
    if (this.mapService.position) {
      this.mapService.createMapForDevice(this.mapRef);
    }
  }
}
