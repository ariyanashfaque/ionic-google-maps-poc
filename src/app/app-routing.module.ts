import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "add-map",
  },
  {
    path: "maps",
    loadChildren: () =>
      import("./pages/maps/maps.module").then((m) => m.MapsPageModule),
  },
  {
    path: "view-map",
    loadChildren: () =>
      import("./pages/view-map/view-map.module").then(
        (m) => m.ViewMapPageModule
      ),
  },
  {
    path: "add-map",
    loadChildren: () =>
      import("./pages/add-map/add-map.module").then((m) => m.AddMapPageModule),
  },
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
})
export class AppRoutingModule {}
