import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { pluck } from 'rxjs/operators';
import { AsyncPipe, NgForOf, UpperCasePipe } from '@angular/common';
import { PizzaFormComponent } from '../../components/pizza-form/pizza-form.component';
import { PizzasService } from '../../services/pizzas.service';
import { Pizza } from '@appizza/interfaces';

@Component({
  standalone: true,
  selector: 'appizza-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgForOf,
    UpperCasePipe,
    PizzaFormComponent,
    AsyncPipe,
    RouterModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private pizzasService = inject(PizzasService);

  pizza$ = this.route.data.pipe(pluck('pizza'));

  updatePizza(pizza: Pizza) {
    this.pizzasService
      .updatePizza(pizza)
      .subscribe(() =>
        this.router.navigate(['..'], { relativeTo: this.route })
      );
  }
}
