import { PipesPersonPipe } from './pipes-person.pipe';

describe('PipesPersonPipe', () => {
  it('create an instance', () => {
    const pipe = new PipesPersonPipe();
    expect(pipe).toBeTruthy();
  });
});
