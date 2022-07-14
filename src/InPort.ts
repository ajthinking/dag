import { Node } from './Node';
import { Port } from './Port';

export class InPort extends Port {
  id: string;
  name: string;
  parent: Node;
  isInput = true;
}
