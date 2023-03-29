import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PizzasService } from '../../services/pizzas.service';
import { AsyncPipe, NgForOf } from '@angular/common';
import { PizzaComponent } from '../../components/pizza/pizza.component';

@Component({
  standalone: true,
  selector: 'appizza-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.scss'],
  imports: [AsyncPipe, NgForOf, PizzaComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzasComponent {
  private pizzasService = inject(PizzasService);

  pizzas$ = this.pizzasService.getPizzas();
}
