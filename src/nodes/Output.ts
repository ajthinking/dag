import { Blueprint } from '../Blueprint';
import { Item } from '../Item';
import { NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { SimpleNode } from '../SimpleNode';

export class OutputBlueprint extends Blueprint {
  name = 'Output';
  inPorts = [new OutPort({ name: 'Input' })];
}

export class Output extends SimpleNode {
  constructor(input: NodeInput = new OutputBlueprint()) {
    super(input);
  }

  onNewItemsAtInput(items: Item[]) {
    console.log('Outputing an item');
    this.getItemStorage().concat(this.id, items);
  }
}
