import { PizzaComponent } from './pizza.component';
import {
  DefaultRenderComponent,
  MockBuilder,
  MockedComponentFixture,
  MockRender,
} from 'ng-mocks';
import { Pizza } from '@appizza/interfaces';

describe(PizzaComponent.name, () => {
  let component: PizzaComponent;
  let fixture: MockedComponentFixture<
    PizzaComponent,
    DefaultRenderComponent<Partial<PizzaComponent>>
  >;

  beforeEach(() => MockBuilder(PizzaComponent));

  beforeEach(() => {
    fixture = MockRender(PizzaComponent, {
      pizza: {
        name: 'Test Pizza',
        ingredients: ['salami', 'cheese'],
        prices: [{ size: '30cm', price: 10 }],
      } as Pizza,
    });
    component = fixture.point.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
