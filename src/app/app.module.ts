import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApiService, AuthService } from "./_service";
import { ConfigComponent } from "./config/config.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ErrorComponent } from "./error/error.component";
import { HistoryComponent } from "./history/history.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HistoryComponent,
    ConfigComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ApiService, { provide: "BASE_URL", useFactory: getBaseUrl }],
  bootstrap: [AppComponent],
})
export class AppModule {}

/**
 * Return the base url of the application.
 */
export function getBaseUrl() {
  return document.getElementsByTagName("base")[0].href;
}
