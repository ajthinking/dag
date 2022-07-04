import { InPort } from '../src/InPort';
import { Node } from '../src/Node';
import { OutPort } from '../src/OutPort';

export class ConcreteNodeBlueprint {
  inPorts = [new InPort()];
  outPorts = [new OutPort()];
}

export class ConcreteNode extends Node {
  constructor(input = new ConcreteNodeBlueprint()) {
    super(input);
  }
}
