export class Strawberry {
    variety: string;
    weight: number;

    constructor(variety: string, weight: number) {
        this.variety = variety;
        this.weight = weight;
    }
}

// FIXME 関数名をより関数の振る舞いに合った名前に修正すること。
export function weightToSize(strawberry: Strawberry) {
    if (strawberry.weight < 10) {
        return 'S';
    } else if (strawberry.weight < 20) {
        return 'M';
    } else if (strawberry.weight < 25) {
        return 'L';
    } else {
        return 'LL';
    }
}

export function format(strawberry: Strawberry) {
    return `${strawberry.variety}: ${weightToSize(strawberry)}`;
}
