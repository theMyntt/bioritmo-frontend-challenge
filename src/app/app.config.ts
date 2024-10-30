import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { appReducer } from './store/reducers/locations.reducers';
import { LocationEffects } from './store/effects/location.effects';
import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(),
    provideEffects(LocationEffects),
    provideStore({
      locations: appReducer,
    }),
    provideHttpClient(withFetch()),
  ],
};
