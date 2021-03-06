export declare class Collection<T> {
    private collection;
    all(): Record<string, T>;
    entries(): Array<[string, T]>;
    keys(): string[];
    values(): T[];
    pull(key: string): T;
    get(key: string): T;
    set(key: string, value: T): void;
    forget(key: string): void;
    flush(): void;
    has(key: string): boolean;
    missing(key: string): boolean;
    count(): number;
    isEmpty(): boolean;
    isNotEmpty(): boolean;
    random(): T;
    toJson(): string;
}
