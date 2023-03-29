import { inject, Injectable } from '@angular/core';
import { PizzasService } from './pizzas.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Pizza } from '@appizza/interfaces';

@Injectable({
  providedIn: 'root',
})
export class PizzaResolverService {
  private pizzasService = inject(PizzasService);

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Pizza> | Promise<Pizza> | Pizza {
    return this.pizzasService.getPizza(route.params['id']);
  }
}
