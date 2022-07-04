import { DiagramNode } from './DiagramNode';
import { Port } from './Port';

export class OutPort extends Port {
  id: string;
  name: string;
  parent: DiagramNode;
  isInput = false;
}
