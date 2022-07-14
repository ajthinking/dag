import { OutPort } from '../../OutPort';
import { Parameter } from '../../Parameter';
import { OutPortMap, ParameterMap } from '../../types';

export class NullBlueprint {
  name = 'Null';
  inPorts = {};
  outPorts: OutPortMap = {};

  parameters: ParameterMap = {};
}

export class NullComputer {
  blueprint = new NullBlueprint();
}

export const makeNode = (
  blueprint = new NullBlueprint(),
) => {};
