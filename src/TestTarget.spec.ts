import { testTarget } from './TestTarget';

test('label', () => {
    expect(testTarget()).toBe(1);
});
