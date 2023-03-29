import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  Pizza,
  PIZZA_INGREDIENTS,
  PIZZA_SIZES,
  PizzaIngredient,
  PizzaPrices,
  PizzaSize,
} from '@appizza/interfaces';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { NgForOf, NgIf, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { UiButtonComponent } from '@appizza/ui/button';

@Component({
  standalone: true,
  selector: 'appizza-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss'],
  imports: [
    ReactiveFormsModule,
    NgForOf,
    UpperCasePipe,
    NgIf,
    TitleCasePipe,
    UiButtonComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PizzaFormComponent {
  @Input()
  get pizza() {
    return this._pizza;
  }
  set pizza(pizza: Pizza) {
    this._pizza = pizza;
    this.setFormValueFromPizza(pizza);
  }
  private _pizza!: Pizza;
  @Output() savePizza: EventEmitter<Pizza> = new EventEmitter<Pizza>();

  availableIngredients: PizzaIngredient[] = PIZZA_INGREDIENTS;
  availableSizes: PizzaSize[] = PIZZA_SIZES;

  form = new FormGroup({
    name: new FormControl(''),
    ingredients: new FormControl<PizzaIngredient[]>([]),
    prices: new FormArray([]),
  });

  addIngredient(ingredient: PizzaIngredient) {
    this.form.get('ingredients')?.setValue([...this.ingredients, ingredient]);
  }

  removeIngredient(index: number) {
    const ingredients = this.ingredients.filter(
      (_: string, i: number) => i !== index
    );

    this.form.get('ingredients')?.setValue(ingredients);
  }

  handleSubmit() {
    this.savePizza.emit(this.getPizzaFromFormValue());
  }

  addSize() {
    this.pricesControl.push(
      new FormGroup({
        size: new FormControl(''),
        price: new FormControl(0),
      })
    );
  }

  removePrice(index: number) {
    this.pricesControl.removeAt(index);
  }

  get ingredients() {
    return this.form.get('ingredients')?.value as PizzaIngredient[];
  }

  get pricesControl(): FormArray {
    return this.form.get('prices') as FormArray;
  }

  private setFormValueFromPizza(pizza: Pizza) {
    this.form.patchValue({
      name: pizza.name,
      ingredients: pizza.ingredients,
    });
    const pricesControls = this.getPricesControls(pizza.prices);

    pricesControls.forEach((price) => this.pricesControl.push(price));
  }

  private getPricesControls(prices: PizzaPrices[]) {
    return prices.map(
      (price) =>
        new FormGroup({
          size: new FormControl(price.size),
          price: new FormControl(price.price),
        })
    );
  }

  private getPizzaFromFormValue(): Pizza {
    return {
      ...this.form.value,
      _id: this.pizza._id,
    } as Pizza;
  }
}
