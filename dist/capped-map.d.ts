export declare class CappedMap<K, V> {
    protected store: Map<K, V>;
    private maxSize;
    constructor(maxSize: number);
    get(key: K): V;
    set(key: K, value: V): void;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
    resize(maxSize: number): void;
    first(): V;
    last(): V;
    keys(): K[];
    values(): V[];
    count(): number;
}
