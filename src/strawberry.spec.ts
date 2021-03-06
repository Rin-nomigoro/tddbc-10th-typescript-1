import { testTarget } from './strawberry';
it('テストが動くかどうか', () => {});

it('あまおうを入力して、あまおうを返すこと', () => {
    expect(testTarget('あまおう')).toBe('あまおう');
});
