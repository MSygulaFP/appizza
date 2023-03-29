import { UIFooter } from './ui-footer';

describe(UIFooter.name, () => {
  it('should render', () => {
    const component = new UIFooter();

    expect(component).toBeTruthy();
  });

  it('should render with name', () => {
    const component = new UIFooter();
    component.name = 'Test';

    expect(component).toBeTruthy();
  });
});
