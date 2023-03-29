import { Component, inject } from '@angular/core';
import { PizzaFormComponent } from '../../components/pizza-form/pizza-form.component';
import { Pizza } from '@appizza/interfaces';
import { PizzasService } from '../../services/pizzas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'appizza-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.scss'],
  standalone: true,
  imports: [PizzaFormComponent],
})
export class NewPizzaComponent {
  private router = inject(Router);
  private pizzasService = inject(PizzasService);

  newPizza: Pizza = {
    _id: 'new',
    name: '',
    ingredients: [],
    prices: [],
  };

  createPizza(pizza: Pizza) {
    const { _id, ...newPizza } = pizza;

    this.pizzasService
      .createPizza(newPizza)
      .subscribe(() => this.router.navigate(['..']));
  }
}
