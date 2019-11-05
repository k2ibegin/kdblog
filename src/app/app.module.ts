import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainheaderModule } from "./mainheader/mainheader.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbootstrapModule } from "./shared/ngbootstrap.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainheaderModule,
    BrowserAnimationsModule,
    NgbootstrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
