import { OutPort } from '../../OutPort';
import { Parameter } from '../../Parameter';
import { OutPortMap, ParameterMap } from '../../types';
import { SmartMap } from '../../utils/SmartMap';

export class CreateBlueprint {
  name = 'Create';
  inPorts: SmartMap<string, OutPort> = new SmartMap<
    string,
    OutPort
  >();
  outPorts: SmartMap<string, OutPort> = new SmartMap<
    string,
    OutPort
  >([['output', new OutPort({ name: 'output' })]]);

  parameters: ParameterMap = new SmartMap<
    string,
    Parameter
  >([
    [
      'count',
      new Parameter({
        name: 'count',
        type: 'number',
        defaultValue: 1,
      }),
    ],
  ]);
}
