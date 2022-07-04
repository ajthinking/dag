import { Item } from './Item';

export class Storage {
  protected map: Map<string, Item[]> = new Map();

  set(key: string, value: Item[]): void {
    this.map.set(key, value);
  }

  get(key: string): Item[] | undefined {
    return this.map.get(key);
  }
}
