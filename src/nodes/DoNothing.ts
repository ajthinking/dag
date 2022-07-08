import { NodeBuilderFlags } from 'typescript';
import { Blueprint } from '../Blueprint';
import { DiagramNode } from '../DiagramNode';
import { InPort } from '../InPort';
import { Item } from '../Item';
import { Node, NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { Port } from '../Port';
import { SimpleNode } from '../SimpleNode';

export class DoNothingBlueprint extends Blueprint {
  name = 'DoNothing';
  inPorts = [new OutPort({ name: 'Input' })];
  outPorts = [new OutPort({ name: 'Output' })];
}

export class DoNothing extends SimpleNode {
  constructor(input: NodeInput = new DoNothingBlueprint()) {
    super(input);
  }

  onNewItemsAtInput(items: Item[]) {
    this.output(items);
  }
}
