import '@appizza/ui/header';
import '@appizza/ui/footer';

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';

import { AppComponent } from './app/app.component';
import { PizzasService } from './app/services/pizzas.service';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./app/pages/pizzas/pizzas.component').then(
        (m) => m.PizzasComponent
      ),
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    PizzasService,
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
