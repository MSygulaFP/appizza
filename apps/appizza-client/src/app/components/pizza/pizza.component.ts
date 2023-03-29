import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Pizza } from '@appizza/interfaces';
import { ArrayToStringPipe } from '../../pipes/array-to-string/array-to-string.pipe';
import { UiButtonComponent } from '@appizza/ui/button';

@Component({
  standalone: true,
  selector: 'appizza-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ArrayToStringPipe, UiButtonComponent],
})
export class PizzaComponent {
  @Input() pizza!: Pizza;

  calculatePrice(size: string, amount: number): number {
    if (!this.pizza) return 0;

    const price = this.pizza.prices.find((p) => p.size === size)?.price ?? 0;

    return price * amount;
  }
}
