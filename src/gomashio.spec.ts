import { gomashio } from './gomashio';

describe('gomashio', () => {
    test('test is success', () => {
        expect(true).toBeTruthy();
    });

    test('gomashio test', () => {
        // formatチェック用にインデントを崩しておく。
        expect(gomashio()).toBe(1);
    });
});
