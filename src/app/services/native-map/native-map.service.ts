import { Geolocation } from "@capacitor/geolocation";
import { ElementRef, Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { GoogleMap, MapType } from "@capacitor/google-maps";

@Injectable({
  providedIn: "root",
})
export class NativeMapService {
  map: GoogleMap;
  markerId: string;
  markers: any[] = [];
  mapStyles: google.maps.MapTypeStyle[];
  position: { lat: number; lng: number };
  watchPosition: { lat: number; lng: number };

  constructor() {}

  public getCurrentPosition = async () => {
    const coordinates = await Geolocation.getCurrentPosition({
      enableHighAccuracy: true,
    });

    this.position = {
      lat: coordinates.coords.latitude,
      lng: coordinates.coords.longitude,
    };
  };

  public watchCurrentPosition = async () => {
    // let options = {
    //   enableHighAccuracy: true,
    // };
    // await Geolocation.watchPosition(
    //   options,
    //   (position) =>
    //     (this.watchPosition = {
    //       lat: position.coords.latitude ? position.coords.latitude : 0,
    //       lng: position.coords.longitude ? position.coords.longitude : 0,
    //     })
    // );
    // console.log(this.watchPosition);
  };

  public async createMapForDevice(map: ElementRef) {
    this.map = await GoogleMap.create({
      id: "capacitor-google-maps",
      element: map.nativeElement,
      apiKey: environment.googleMapsApiKey,
      config: {
        zoom: 18,
        mapTypeControl: false,
        center: this.position,
        disableDefaultUI: false,
      },
      forceCreate: true,
    });

    this.map.setMapType(MapType.Satellite);

    await this.addMarker(this.position.lat, this.position.lng);
    await this.addListeners();
  }

  async addMarker(lat, lng) {
    // if (this.markerId) this.removeMarker();
    this.markerId = await this.map.addMarker({
      coordinate: {
        lat: lat,
        lng: lng,
      },
      draggable: true,
    });

    this.markers.push({
      markerId: (parseInt(this.markerId) + 1).toString(),
      coordinate: {
        lat: lat,
        lng: lng,
      },
      draggable: true,
    });

    this.addMarkers(lat, lng);
  }

  async addMarkers(lat, lng) {
    if (this.markerId) this.removeMarker();
    await this.map.addMarkers([
      {
        coordinate: {
          lat: lat,
          lng: lng,
        },
        draggable: true,
      },
    ]);
  }

  async removeMarker(id?) {
    await this.map.removeMarker(id ? id : this.markerId);
  }

  async addListeners() {
    // await this.map.setOnMarkerClickListener((event) => {
    //   this.removeMarker(event.markerId);
    // });

    await this.map.setOnMapClickListener((event) => {
      this.addMarker(event.latitude, event.longitude);
    });

    await this.map.setOnMarkerDragEndListener(async (event) => {
      if (event.markerId) this.removeMarker(event.markerId);
      this.markers = this.markers.filter(
        (marker) => marker.markerId !== event.markerId
      );

      this.markers.push({
        markerId: (parseInt(this.markerId) + 1).toString(),
        coordinate: {
          lat: event.latitude,
          lng: event.longitude,
        },
        draggable: true,
      });

      await this.map.addMarkers([
        {
          coordinate: {
            lat: event.latitude,
            lng: event.longitude,
          },
          draggable: true,
        },
      ]);
    });

    console.log("Markers:", this.markers);
  }
}
