import { Diagram } from './Diagram';
import { Node } from './Node';
import { Port } from './Port';

export class OutPort extends Port {
  id: string;
  name: string;
  parent: Node;
  isInput = false;
}
