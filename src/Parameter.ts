export class Parameter {
  name: string;
  type: string;
  value: unknown;

  constructor(input: {
    name: string;
    type: string;
    value: unknown;
  }) {
    this.name = input.name;
    this.type = input.type;
    this.value = input.value;
  }
}
