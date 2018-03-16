import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment'; // Angular CLI environemnt

// Material imports
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';

// ngrx main imports
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { reducers, effects } from './store';

// service imports
import * as fromServices from './services';
import { NewsfeedComponent } from './newsfeed/newsfeed.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/newsfeed', pathMatch: 'full' },
  { path: 'newsfeed', component: NewsfeedComponent },
  { path: '**', redirectTo: '/newsfeed' }
];

@NgModule({
  declarations: [AppComponent, NewsfeedComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('app', reducers),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature(effects),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    FlexLayoutModule
  ],
  providers: [fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule {}
