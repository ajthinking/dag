import { Diagram } from './Diagram';
import { Port } from './Port';

export class OutPort extends Port {
  id: string;
  name: string;
  parent: Diagram;
  isInput = false;
}
