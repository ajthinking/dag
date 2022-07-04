import { Item } from './Item';

export class Storage {
  protected map: Map<string, Item[]> = new Map();

  set(key: string, value: Item[]): void {
    this.map.set(key, value);
  }

  concat(key: string, items: Item[]): void {
    if (!this.map.has(key)) {
      this.map.set(key, []);
    }

    this.map.get(key).push(...items);
  }

  get(key: string): Item[] | undefined {
    return this.map.get(key);
  }
}
