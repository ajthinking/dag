import { InPort } from './InPort';
import { OutPort } from './OutPort';
import { Parameter } from './Parameter';
import {
  InPortMap,
  OutPortMap,
  ParameterMap,
} from './types';

export abstract class Blueprint {
  id?: string;
  name: string;
  inPorts: InPortMap;
  outPorts: OutPortMap;
  parameters: ParameterMap;
}
