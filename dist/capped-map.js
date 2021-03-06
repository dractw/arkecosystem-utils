"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CappedMap {
    constructor(maxSize) {
        this.store = new Map();
        this.resize(maxSize);
    }
    get(key) {
        return this.store.get(key);
    }
    set(key, value) {
        if (this.store.size >= this.maxSize) {
            this.store.delete(Array.from(this.store)[0][0]);
        }
        this.store = this.store.set(key, value);
    }
    has(key) {
        return this.store.has(key);
    }
    delete(key) {
        if (!this.store.has(key)) {
            return false;
        }
        this.store.delete(key);
        return !this.store.has(key);
    }
    clear() {
        this.store.clear();
    }
    resize(maxSize) {
        this.maxSize = maxSize;
        if (this.store.size > this.maxSize) {
            this.store = new Map(Array.from(this.store).slice(-Math.max(0, this.maxSize)));
        }
    }
    first() {
        return Array.from(this.store)[0][1];
    }
    last() {
        return Array.from(this.store)[this.store.size - 1][1];
    }
    keys() {
        return [...this.store.keys()];
    }
    values() {
        return [...this.store.values()];
    }
    count() {
        return this.store.size;
    }
}
exports.CappedMap = CappedMap;
//# sourceMappingURL=capped-map.js.map