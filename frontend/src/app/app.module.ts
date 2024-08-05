import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';

import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PointsConverterPipe } from './pipes/points-converter/points-converter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ZoneEffects } from './state/zone.effects';
import { ZONES_SELECTOR_NAME } from './state/zone.selector';
import { zoneReducer } from './state/zone.reducer';
import { NewZoneComponent } from './new-zone/new-zone.component';
import { ZoneDetailsComponent } from './zone-details/zone-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { ZonesOverviewComponent } from './zones-overview/zones-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    PointsConverterPipe,
    NewZoneComponent,
    ZoneDetailsComponent,
    LoadingSpinnerComponent,
    ZonesOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    // NGRX
    StoreModule.forRoot({}),
    StoreModule.forFeature(ZONES_SELECTOR_NAME, zoneReducer),
    EffectsModule.forRoot([ZoneEffects]),

    // ANGULAR MATERIAL
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatCardModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
