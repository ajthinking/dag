import { Node } from '../../Node';
import { CreateBlueprint } from './CreateBlueprint';

export const makeNode = (
  blueprint = new CreateBlueprint(),
) => {
  // return a new node
  // what is the difference between blueprint and NodeInput ?? - the blueprint provides default values

  return new Node(blueprint);
};
