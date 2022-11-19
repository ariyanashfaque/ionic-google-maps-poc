import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-maps",
  templateUrl: "./maps.page.html",
  styleUrls: ["./maps.page.scss"],
})
export class MapsPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  handleAddMap = () => {
    this.router.navigate(["/add-map"]);
  };
  handleViewMap = () => {
    this.router.navigate(["/view-map"]);
  };
}
