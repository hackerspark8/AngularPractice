import { Routes } from "@angular/router";

import { RegisterComponent } from "./register/register.component";
import { AppComponent } from "./app.component";
import { DynamicregisterComponent } from "./dynamicregister/dynamicregister.component";
import { TypeaheadComponent } from "./typeahead/typeahead.component";

export const ROUTES: Routes = [
  {
    path: "",
    component: AppComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "newregister",
    component: DynamicregisterComponent
  },
  {
    path: "typeahead",
    component: TypeaheadComponent
  }
];
