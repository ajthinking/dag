import { NodeBuilderFlags } from 'typescript';
import { Blueprint } from '../Blueprint';
import { DiagramNode } from '../DiagramNode';
import { InPort } from '../InPort';
import { Item } from '../Item';
import { Node, NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { Port } from '../Port';
import { SimpleNode } from '../SimpleNode';
import { sleep } from '../utils/sleep';

export class SleepBlueprint extends Blueprint {
  name = 'Sleep';
  inPorts = [new OutPort({ name: 'Input' })];
  outPorts = [new OutPort({ name: 'Output' })];
}

export class Sleep extends SimpleNode {
  constructor(input: NodeInput = new SleepBlueprint()) {
    super(input);
  }

  async onNewItemsAtInput(items: Item[]) {
    console.log('New items at Sleep');

    await sleep(1000); // Continue here - can it await?
    this.output(items);
  }
}
