import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { ModalController, Platform } from "@ionic/angular";
import { MapService } from "src/app/services/map.service";

@Component({
  selector: "app-view-map",
  templateUrl: "./view-map.page.html",
  styleUrls: ["./view-map.page.scss"],
})
export class ViewMapPage implements OnInit {
  @ViewChild("map") mapRef: ElementRef;

  constructor(
    private plt: Platform,
    private mapService: MapService,
    private modalCrtl: ModalController
  ) {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    this.handleViewMap()
  }

  async handleViewMap() {
    // this.mapService.modeView = true;
    await this.mapService.getCurrentPosition();
    if (this.mapService.position&&this.mapService.position.lat) {
      if(this.plt.is("ios")){
      await this.mapService.createMapForDevice(this.mapRef);
      }else{
        await this.mapService.createMapForWeb(this.mapRef);
      }
    }
  }
}
