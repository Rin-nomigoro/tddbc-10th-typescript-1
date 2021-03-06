import { Strawberry, format } from './strawberry';
it('テストが動くかどうか', () => {});

describe('Strawberry', () => {
    const variety = 'いちごの品種名';
    const size = 'いちごのサイズ';
    let strawberry: Strawberry;

    beforeEach(() => {
        strawberry = new Strawberry(variety, size);
    });

    it('品種とサイズを入力して、Strawberrオブジェクトを取得できること。', () => {
        expect(strawberry).toBeTruthy();
    });

    it('入力した品種の文字列とStrawberrオブジェクトの品種の文字列が一致すること', () => {
        expect(strawberry.variety).toBe(variety);
    });

    it('入力したサイズの文字列とStrawberrオブジェクトのサイズの文字列が一致すること', () => {
        expect(strawberry.size).toBe(size);
    });
});

describe('format', () => {
    it('品種:あまおう、サイズ:Sを入力し、文字列表現「あまおう: S」を取得できること', () => {
        const variety = 'あまおう';
        const size = 'S';
        const strawberry = new Strawberry(variety, size);
        expect(format(strawberry)).toBe('あまおう: S');
    });

    it('品種:とちおとめ、サイズ:Mを入力し、文字列表現「あまおう: S」を取得できること', () => {
        const variety = 'とちおとめ';
        const size = 'M';
        const strawberry = new Strawberry(variety, size);
        expect(format(strawberry)).toBe('とちおとめ: M');
    });
});
