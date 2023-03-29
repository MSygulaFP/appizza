import { UIHeader } from './ui-header';

describe(UIHeader.name, () => {
  it('should render', () => {
    const component = new UIHeader();

    expect(component).toBeTruthy();
  });
});
