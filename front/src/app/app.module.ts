/**
 * Module Import
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';
import { AppRoutingModule } from './app-routing.module';

/**
 * Component Import
 */
import { AppComponent } from './app.component';
import { AppService } from './Shared/service/app.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,

  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
