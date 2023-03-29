import { ArrayToStringPipe } from './array-to-string.pipe';

describe(ArrayToStringPipe.name, () => {
  it('should transform array to string', () => {
    const pipe = new ArrayToStringPipe();

    const result = pipe.transform(['Hello', 'world']);

    expect(result).toEqual('Hello, world');
  });

  it('should transform array to string with custom separator', () => {
    const pipe = new ArrayToStringPipe();

    const result = pipe.transform(['Hello', 'world'], ' - ');

    expect(result).toEqual('Hello - world');
  });
});
