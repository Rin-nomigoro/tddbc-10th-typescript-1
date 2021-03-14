import { Strawberry2, format2, weightToSize } from './strawberry2';

it('テストが動くかどうか', () => {});

describe('Strawberry2', () => {
    const variety = 'いちごの品種名';
    const weight = 1000;
    let strawberry2: Strawberry2;

    beforeEach(() => {
        strawberry2 = new Strawberry2(variety, weight);
    });

    it('品種と重さを入力して、Strawberry2オブジェクトを取得できること。', () => {
        expect(strawberry2).toBeTruthy();
    });

    it('入力した品種の文字列とStrawberry2オブジェクトの品種の文字列が一致すること', () => {
        expect(strawberry2.variety).toBe(variety);
    });

    it('入力した重さの数値とStrawberry2オブジェクトの重さの数値が一致すること', () => {
        expect(strawberry2.weight).toBe(weight);
    });
});

describe('weightToSize', () => {
    describe('いちごの重さを基にサイズが取得できること', () => {
        test.each([
            [1, 'S'],
            [9, 'S'],
            [10, 'M'],
            [19, 'M'],
            [20, 'L'],
            [24, 'L'],
            [25, 'LL'],
        ])(
            'いちごの重さに%dgと入力し、サイズが%sと取得できること',
            (weight, expectedSize) => {
                const strawberry2 = new Strawberry2('いちごの品種名', weight);
                expect(weightToSize(strawberry2)).toBe(expectedSize);
            }
        );
    });
});

describe('format2', () => {
    describe('いちごオブジェクトの文字列表現を受け取る。', () => {
        test.each([
            ['あまおう', 1, 'あまおう: S'],
            ['とちおとめ', 10, 'とちおとめ: M'],
            ['もういっこ', 20, 'もういっこ: L'],
            ['もういっこ', 25, 'もういっこ: LL'],
        ])(
            '品種:%s、重さ:%dgと入力し、文字列表現「%s」を取得できること',
            (variety, weight, expected) => {
                const strawberry2 = new Strawberry2(variety, weight);
                expect(format2(strawberry2)).toBe(expected);
            }
        );
    });
});
