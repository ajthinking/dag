export class Item {
  original: unknown;

  constructor(input: unknown) {
    this.original = input;
  }

  serialize(): string {
    return JSON.stringify(this);
  }

  static deserialize(json: string): Item {
    const content = JSON.parse(json);
    return new Item(content.original);
  }

  setProperty(key: string, value: unknown): this {
    this.original[key] = value;

    return this;
  }
}
