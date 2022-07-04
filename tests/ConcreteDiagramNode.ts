import { DiagramNode } from '../src/DiagramNode';

export class ConcreteDiagramNodeBlueprint {}

export class ConcreteDiagramNode extends DiagramNode {
  constructor(input = new ConcreteDiagramNodeBlueprint()) {
    super(input);
  }
}
