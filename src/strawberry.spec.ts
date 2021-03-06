import { Strawberry } from './strawberry';

it('テストが動くかどうか', () => {});

describe('Strawberry', () => {
    const variety = 'いちごの品種名';
    const weight = 1000;
    let strawberry: Strawberry;

    beforeEach(() => {
        strawberry = new Strawberry(variety, weight);
    });

    it('品種と重さを入力して、Strawberryオブジェクトを取得できること。', () => {
        expect(strawberry).toBeTruthy();
    });

    it('入力した品種の文字列とStrawberryオブジェクトの品種の文字列が一致すること', () => {
        expect(strawberry.variety).toBe(variety);
    });

    it('入力した重さの数値とStrawberryオブジェクトの重さの数値が一致すること', () => {
        expect(strawberry.weight).toBe(weight);
    });

    describe('入力した重さを基にサイズが取得できること', () => {
        test.each([
            [1, 'S'],
            [9, 'S'],
            [10, 'M'],
            [19, 'M'],
            [20, 'L'],
            [24, 'L'],
            [25, 'LL'],
        ])(
            '重さが%dgと入力し、サイズが%sと取得できること ',
            (weight, expectedSize) => {
                const strawberry = new Strawberry('いちごの品種名', weight);
                expect(strawberry.size).toBe(expectedSize);
            }
        );
    });

    describe('label', () => {
        describe('いちごオブジェクトの文字列表現を受け取る。', () => {
            test.each([
                ['あまおう', 1, 'あまおう: S'],
                ['とちおとめ', 10, 'とちおとめ: M'],
                ['もういっこ', 20, 'もういっこ: L'],
                ['もういっこ', 25, 'もういっこ: LL'],
            ])(
                '品種:%s、重さ:%dgと入力し、文字列表現「%s」を取得できること',
                (variety, weight, expected) => {
                    const strawberry = new Strawberry(variety, weight);
                    expect(strawberry.label).toBe(expected);
                }
            );
        });
    });
});
