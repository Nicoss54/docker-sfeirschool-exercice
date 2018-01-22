/**
 * Module Import
 */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './Core/core.module';
import { FeatureModule } from './Feature/feature.module';
import { AppRoutingModule } from './app-routing.module';

/**
 * Component Import
 */
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    FeatureModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
