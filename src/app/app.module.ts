import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ROUTES } from "../app/app.routes";
import { AppComponent } from "./app.component";
import { RaceComponent } from "./race/race.component";
import { PoniesComponent } from "./ponies/ponies.component";
import { FromNowPipe } from "./from-now.pipe";
import { LoggableDirective } from "./loggable.directive";
import { RegisterComponent } from "./register/register.component";
import { RouterModule } from "@angular/router";
import { DynamicregisterComponent } from "./dynamicregister/dynamicregister.component";
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { FocusDirective } from './focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    RaceComponent,
    PoniesComponent,
    FromNowPipe,
    LoggableDirective,
    RegisterComponent,
    DynamicregisterComponent,
    TypeaheadComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
