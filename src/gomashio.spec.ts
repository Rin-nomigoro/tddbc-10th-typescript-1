import { gomashio } from './gomashio';

describe('gomashio', () => {
    test('test is success', () => {
        expect(true).toBeTruthy();
    });

    it('gomashio test', () => {
        expect(gomashio()).toBe(1);
    });
});
