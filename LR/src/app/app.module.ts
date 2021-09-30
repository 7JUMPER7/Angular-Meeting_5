import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlaneViewerComponent } from './PlaneViewer/PlaneViewer.component';
import { CarViewerComponent } from './CarViewer/CarViewer.component';
import { ShipViewerComponent } from './ShipViewer/ShipViewer.component';

@NgModule({
  declarations: [			
    AppComponent,
      PlaneViewerComponent,
      CarViewerComponent,
      ShipViewerComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
