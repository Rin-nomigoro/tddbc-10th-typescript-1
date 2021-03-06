// const VARIETY = {
//     あまおう: 'あまおう',
//     とちおとめ: 'とちおとめ',
//     もういっこ: 'もういっこ',
// } as const;
// type VARIETY_TYPE = keyof typeof VARIETY;

// const SIZE = {
//     S: 'S',
//     M: 'M',
//     L: 'L',
//     LL: 'LL',
// } as const;
// type SIZE_TYPE = keyof typeof SIZE;

export class Strawberry {
    variety: string;
    size: string;

    constructor(variety: string, size: string) {
        this.variety = variety;
        this.size = size;
    }
}

// FIXME 関数名をより具体的な名前に修正すること。
export function format(strawberry: Strawberry) {
    return `${strawberry.variety}: ${strawberry.size}`;
}
