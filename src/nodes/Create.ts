import { Item } from '../Item';
import { Node, NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { Parameter } from '../Parameter';
import { SimpleNode } from '../SimpleNode';

export class CreateBlueprint {
  name = 'Create';
  outPorts = [new OutPort({ name: 'output' })];
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

  /*
   * StarterNode.output() notifies diagram it want to output items
   * Diagram resolves connected links and puts items in the corresponding storage
   * Diagram resolves ports and nodes dependent on the links
   * Diagram notifies dependent nodes by calling Node.onNewItemsAt
   */
  async start(): Promise<void> {
    console.log('Starting node: ' + this.name);
    this.output([new Item(null)]);
  }
}
