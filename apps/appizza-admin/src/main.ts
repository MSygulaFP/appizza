import '@appizza/ui/header';
import '@appizza/ui/footer';
import '@appizza/ui/button';

import { provideRouter, Route } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { PizzasService } from './app/services/pizzas.service';
import { PizzaResolverService } from './app/services/pizza-resolver.service';

const routes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./app/pages/pizza-list/pizza-list.component').then(
        (m) => m.PizzaListComponent
      ),
  },
  {
    path: 'new',
    loadComponent: () =>
      import('./app/pages/new-pizza/new-pizza.component').then(
        (m) => m.NewPizzaComponent
      ),
  },
  {
    path: ':id',
    loadComponent: () =>
      import('./app/pages/pizza/pizza.component').then((m) => m.PizzaComponent),
    resolve: {
      pizza: PizzaResolverService,
    },
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(HttpClientModule),
    PizzasService,
    PizzaResolverService,
  ],
}).catch((err) => console.error(err));
