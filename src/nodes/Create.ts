import { Item } from '../Item';
import { Node, NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { Parameter } from '../Parameter';
import { SimpleNode } from '../SimpleNode';

export class CreateBlueprint {
  name = 'Create';
  outPorts = [new OutPort({ name: 'Output' })];
  parameters = [
    new Parameter({
      name: 'type',
      type: 'string',
      value: 'Create',
    }),
  ];
}

export class Create extends SimpleNode {
  constructor(input: NodeInput = new CreateBlueprint()) {
    super(input);
  }

  async start(): Promise<void> {
    const count = 3;

    for (let i = 0; i < count; i++) {
      console.log('Creating a new item');
      this.output([new Item(null)]);
    }
  }
}
