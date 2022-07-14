import { OutPort } from './OutPort';
import { InPort } from './InPort';
import { Parameter } from './Parameter';
import { SmartMap } from './utils/SmartMap';

export type InPortMap = SmartMap<string, InPort>;
export type OutPortMap = SmartMap<string, OutPort>;
export type ParameterMap = { [key: string]: Parameter };

export interface Entity {
  id: string;
  name: string;
  // serialize(): string;
  // deserialize(json: string): Entity;
  // canRespondTo(event): boolean;
}
