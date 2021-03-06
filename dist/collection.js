"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const get_1 = require("./get");
const has_1 = require("./has");
const sample_1 = require("./sample");
const set_1 = require("./set");
const stringify_1 = require("./stringify");
const unset_1 = require("./unset");
class Collection {
    constructor() {
        this.collection = {};
    }
    all() {
        return this.collection;
    }
    entries() {
        return Object.entries(this.collection);
    }
    keys() {
        return Object.keys(this.collection);
    }
    values() {
        return Object.values(this.collection);
    }
    pull(key) {
        const item = get_1.get(this.collection, key);
        this.forget(key);
        return item;
    }
    get(key) {
        return get_1.get(this.collection, key);
    }
    set(key, value) {
        set_1.set(this.collection, key, value);
    }
    forget(key) {
        unset_1.unset(this.collection, key);
    }
    flush() {
        this.collection = {};
    }
    has(key) {
        return has_1.has(this.collection, key);
    }
    missing(key) {
        return !this.has(key);
    }
    count() {
        return Object.keys(this.collection).length;
    }
    isEmpty() {
        return this.count() <= 0;
    }
    isNotEmpty() {
        return !this.isEmpty();
    }
    random() {
        return sample_1.sample(this.values());
    }
    toJson() {
        const collection = {};
        for (const [key, value] of this.entries()) {
            collection[key] = value;
        }
        return stringify_1.stringify(collection);
    }
}
exports.Collection = Collection;
//# sourceMappingURL=collection.js.map