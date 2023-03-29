import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from '@appizza/interfaces';
import { PizzaFormComponent } from '../../components/pizza-form/pizza-form.component';
import { PizzasService } from '../../services/pizzas.service';

@Component({
  selector: 'appizza-new-pizza',
  templateUrl: './new-pizza.component.html',
  styleUrls: ['./new-pizza.component.scss'],
  standalone: true,
  imports: [PizzaFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
