import { InPort } from './InPort';
import { OutPort } from './OutPort';
import { Parameter } from './Parameter';

export abstract class Blueprint {
  name: string;
  inPorts: InPort[] = [];
  outPorts: OutPort[] = [];
  parameters: Parameter[];
}
