import { DiagramNode } from '../src/DiagramNode';
import { Create } from '../src/nodes/Create';
import { DoNothing } from '../src/nodes/DoNothing';

it('can execute a simple diagram', async () => {
  const diagram = new DiagramNode();
  const node1 = new Create();
  const node2 = new DoNothing();

  diagram.addNodes([node1, node2]);
  diagram.linkNodes(node1, node2);

  await diagram.run(); // CONTINUE HERE
});
