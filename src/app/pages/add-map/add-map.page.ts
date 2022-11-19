import { ModalController, Platform } from "@ionic/angular";
import { MapService } from "src/app/services/map.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { NativeMapService } from "src/app/services/native-map/native-map.service";
import { BrowserMapService } from "src/app/services/browser-map/browser-map.service";

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

  constructor(
    private platform: Platform,
    private nativeMapService: NativeMapService
  ) {}

  ionViewWillEnter() {
    if (this.platform.is("android") && this.platform.is("ios")) {
      this.nativeDevice = true;
    }
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.nativeMapService.getCurrentPosition();
  }

  async handleAddMap() {
    if (this.nativeMapService.position) {
      await this.nativeMapService.createMapForDevice(this.mapRef);
    }
  }
}
