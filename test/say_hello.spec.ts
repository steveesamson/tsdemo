import { sayHello } from '../src/say_hello';

describe('Testing say_hello', () => {
  it('Should return hello steve!', () => {
    expect(sayHello('steve')).toBe('Bonjour steve!');
  });
});
