export class Parameter {
  name: string;
  type: string;
  defaultValue: unknown;
  value?: unknown;

  constructor(input: {
    name: string;
    type: string;
    defaultValue: unknown;
    value?: unknown;
  }) {
    this.name = input.name;
    this.type = input.type;
    this.defaultValue = input.defaultValue;
    this.value = input.value ?? input.defaultValue;
  }
}
