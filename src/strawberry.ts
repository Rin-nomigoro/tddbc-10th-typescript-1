import { Extension } from 'typescript';

export class Strawberry {
    variety: string;
    weight: number;

    private readonly S_SIZE_MIN_WEIGHT = 1;
    private readonly M_SIZE_MIN_WEIGHT = 10;
    private readonly L_SIZE_MIN_WEIGHT = 20;
    private readonly LL_SIZE_MIN_WEIGHT = 25;
    get size(): string {
        if (
            this.S_SIZE_MIN_WEIGHT <= this.weight &&
            this.weight < this.M_SIZE_MIN_WEIGHT
        ) {
            return 'S';
        }

        if (
            this.M_SIZE_MIN_WEIGHT <= this.weight &&
            this.weight < this.L_SIZE_MIN_WEIGHT
        ) {
            return 'M';
        }

        if (
            this.L_SIZE_MIN_WEIGHT <= this.weight &&
            this.weight < this.LL_SIZE_MIN_WEIGHT
        ) {
            return 'L';
        }

        if (this.LL_SIZE_MIN_WEIGHT <= this.weight) {
            return 'LL';
        }

        throw new Error('Error: 1g以上の重さを入力してください。');
    }

    get label() {
        return `${this.variety}: ${this.size}`;
    }

    constructor(variety: string, weight: number) {
        this.variety = variety;
        this.weight = weight;
    }
}
