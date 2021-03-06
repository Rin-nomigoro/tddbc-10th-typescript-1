export class Strawberry {
    variety: string;
    size: string;

    constructor(variety: string, size: string) {
        this.variety = variety;
        this.size = size;
    }
}

export class Strawberry2 {
    variety: string;
    weight: number;

    constructor(variety: string, weight: number) {
        this.variety = variety;
        this.weight = weight;
    }
}

// FIXME 関数名をより具体的な名前に修正すること。
export function format(strawberry: Strawberry) {
    return `${strawberry.variety}: ${strawberry.size}`;
}

// FIXME 関数名をより関数の振る舞いに合った名前に修正すること。
export function weightToSize(Strawberry2: Strawberry2) {
    if (Strawberry2.weight < 10) {
        return 'S';
    } else if (Strawberry2.weight < 20) {
        return 'M';
    } else if (Strawberry2.weight < 25) {
        return 'L';
    } else {
        return 'LL';
    }
}

export function format2(strawberry2: Strawberry2) {
    return `${strawberry2.variety}: ${weightToSize(strawberry2)}`;
}
