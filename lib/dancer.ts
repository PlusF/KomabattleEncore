export type Dancer = {
    circle: string;
    grade: string;
    genre: string;
    name: string;
    rep: string;
    canceled: boolean;
}

export type DancerName = {
    name: string;
}

export type Battle = {
    mode: number;
    first: DancerName[];
    second: DancerName[];
    third: DancerName[];
    quarter: DancerName[];
    semi: DancerName[];
    final: DancerName[];
    winner: DancerName[];
}

export type Content = {
    time: string;
    name: string;
    description: string;
}
