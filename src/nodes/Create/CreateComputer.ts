import { Item } from '../../Item';
import { CreateBlueprint } from './CreateBlueprint';

export class CreateComputer {
  blueprint = new CreateBlueprint();
  inputSocket: any;
  outputSocket: any;

  async start(): Promise<void> {
    const count =
      this.blueprint.parameters.get('count').value;

    for (let i = 0; i < count; i++) {
      this.outputSocket.output([new Item(null)]);
    }
  }
}
