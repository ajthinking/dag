import { DiagramNode } from './DiagramNode';
import { Port } from './Port';

export class InPort extends Port {
  id: string;
  name: string;
  parent: DiagramNode;
  isInput = true;
}
