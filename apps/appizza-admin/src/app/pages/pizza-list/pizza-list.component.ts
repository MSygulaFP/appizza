import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  inject,
  OnInit,
} from '@angular/core';
import { Observable } from 'rxjs';
import { PizzasService } from '../../services/pizzas.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pizza } from '@appizza/interfaces';
import { UiButtonComponent } from '@appizza/ui/button';

@Component({
  standalone: true,
  selector: 'appizza-admin-pizzas',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.scss'],
  imports: [NgFor, AsyncPipe, RouterLink, UiButtonComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PizzaListComponent implements OnInit {
  private pizzasService$ = inject(PizzasService);

  pizzas$!: Observable<Pizza[]>;

  ngOnInit() {
    this.getPizzas();
  }

  deletePizza(id: string) {
    this.pizzasService$.deletePizza(id).subscribe(() => this.getPizzas());
  }

  private getPizzas() {
    this.pizzas$ = this.pizzasService$.getPizzas();
  }
}
