import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {
    // this.router.navigate(["/maps"]);
  }

  ngOnInit() {
    // this.router.navigate(["/maps"]);
  }
}
