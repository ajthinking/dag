export class SmartMap<Key, Value> {
  protected standardMap: Map<Key, Value>;

  constructor(items?: [Key, Value][]) {
    this.standardMap = new Map<Key, Value>(items);
  }

  onEach(callback) {
    for (let value of this.standardMap.values()) {
      callback(value);
    }

    return this;
  }

  get(key: Key) {
    return this.standardMap.get(key);
  }

  toMap(): Map<Key, Value> {
    return this.standardMap;
  }
}
