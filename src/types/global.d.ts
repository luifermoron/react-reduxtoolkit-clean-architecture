
type SampleOne = {
    test: number,
    testTwo: string | null,
    testThree?: boolean
}

type SampleTwo = number | undefined;

type ReadonlyProps<T> = {
    readonly [P in keyof T]: T[P];
}

type SampleThreeReadonlyProps = ReadonlyProps<SampleOne>;


// Discriminator unions
type GoodShape =
    | {kind: "circle"; radius: number }
    | {kind: "rectangle"; width: number; height: number }
    | {kind: "square"; size: number }


interface Person {
    name: string;
    age: number;
    job: string;
}

type Nullable<T> = { [K in keyof T]: T[K] | null };

type PartialPerson = Partial<Person>;
type ReadOnlyPerson = Readonly<Person>;
type NameAndAge = Pick<Person, "name" | "age">;
type WithoutEmail = Omit<Person,"email">;


type TaskProps = {
    children: React.ReactNode
};

type Task = {
    id: number;
    text: string;
    done: boolean
};

type Action = 
| { type: "added", text: string, id: number }
| { type: "changed", task: Task }
| { type: "deleted", id: number };