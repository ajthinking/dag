import { DiagramNode } from '../src/DiagramNode';
import { Create } from '../src/nodes/Create';
import { DoNothing } from '../src/nodes/DoNothing';

it('can execute a simple diagram', async () => {
  const diagram = new DiagramNode();
  const node1 = new Create();
  const node2 = new DoNothing();

  diagram.addNodes([node1, node2]);
  diagram.linkNodes(node1, node2);

  await diagram.run();

  console.log(diagram.getItemStorage());
  console.log(diagram.links[0].id);

  // Continue here
  // Run the test!
  // See how data is available in the storage (on the link - not on the last output port)
  // Several things makes eyes bleed: Inheritance (bad), parent dependent on child (really bad), abstract classes (bad)
});
