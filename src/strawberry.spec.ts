import {
    Strawberry,
    Strawberry2,
    format,
    format2,
    weightToSize,
} from './strawberry';

it('テストが動くかどうか', () => {});

// TODO 参考の為に残す。必要になったら消す。
xdescribe('deprecated', () => {
    describe('Strawberry', () => {
        const variety = 'いちごの品種名';
        const size = 'いちごのサイズ';
        let strawberry: Strawberry;

        beforeEach(() => {
            strawberry = new Strawberry(variety, size);
        });

        it('品種とサイズを入力して、Strawberryオブジェクトを取得できること。', () => {
            expect(strawberry).toBeTruthy();
        });

        it('入力した品種の文字列とStrawberryオブジェクトの品種の文字列が一致すること', () => {
            expect(strawberry.variety).toBe(variety);
        });

        it('入力したサイズの文字列とStrawberryオブジェクトのサイズの文字列が一致すること', () => {
            expect(strawberry.size).toBe(size);
        });
    });

    describe('format', () => {
        test.each([
            ['あまおう', 'S', 'あまおう: S'],
            ['とちおとめ', 'M', 'とちおとめ: M'],
            ['もういっこ', 'L', 'もういっこ: L'],
            ['もういっこ', 'LL', 'もういっこ: LL'],
        ])(
            '品種:%s、サイズ:%sを入力し、文字列表現「%s」」を取得できること',
            (variety, size, expected) => {
                const strawberry = new Strawberry(variety, size);
                expect(format(strawberry)).toBe(expected);
            }
        );
    });
});
