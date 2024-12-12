import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch } from '@angular/common/http';

// PrimNG
import { providePrimeNG } from 'primeng/config';
import MyPreset from './mypreset';



export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    providePrimeNG({
      theme: {
          preset: MyPreset,
          options: {
            darkModeSelector: '.dark'
        }
      }
    })
  ]
};
