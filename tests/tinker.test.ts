import { DiagramNode } from '../src/DiagramNode';
import { Create } from '../src/nodes/Create';
import { DoNothing } from '../src/nodes/DoNothing';
import { Output } from '../src/nodes/Output';
import { sleep } from '../src/utils/sleep';

it('can execute a simple diagram', async () => {
  const diagram = new DiagramNode();
  const node1 = new Create();
  const node2 = new DoNothing();
  const node3 = new Output();

  diagram.addNodes([node1, node2, node3]);
  diagram.linkNodes(node1, node2);
  diagram.linkNodes(node2, node3);

  await diagram.run();

  console.log(diagram.itemsAt(node3.id));
});
