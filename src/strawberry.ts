export class Strawberry {
    variety: string;
    weight: number;
    get size() {
        if (this.weight < 10) {
            return 'S';
        } else if (this.weight < 20) {
            return 'M';
        } else if (this.weight < 25) {
            return 'L';
        } else {
            return 'LL';
        }
    }

    constructor(variety: string, weight: number) {
        this.variety = variety;
        this.weight = weight;
    }
}

export function format(strawberry: Strawberry) {
    return `${strawberry.variety}: ${strawberry.size}`;
}
