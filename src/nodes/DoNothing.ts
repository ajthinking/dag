import { NodeBuilderFlags } from 'typescript';
import { Blueprint } from '../Blueprint';
import { DiagramNode } from '../DiagramNode';
import { InPort } from '../InPort';
import { Item } from '../Item';
import { Node, NodeInput } from '../Node';
import { OutPort } from '../OutPort';
import { Port } from '../Port';
import { SimpleNode } from '../SimpleNode';

export class DoNothingBlueprint extends Blueprint {
  name = 'DoNothing';
  inPorts = [new OutPort({ name: 'input' })];
  outPorts = [new OutPort({ name: 'output' })];
}

export class DoNothing extends SimpleNode {
  constructor(input: NodeInput = new DoNothingBlueprint()) {
    super(input);
  }
}

// // Create a SimpleNde that has a single input port and a single output port.
// SimpleNode.build('DoNothing')
// 	.inputPort()
// 	.outputPort()
// 	.getBluePrint();

// DiagramNode.build('GetListings')
// 	.inputPort('ids')
// 	.add(HttpRequest)
// 		.onPort('success').add(OutputPort('listings'))
// 		.onPort('error').add(OutputPort('error'))

// DiagramNode.build('GetListings')
// 	.addNode(() => Node.build('HttpRequest')
// 		.withParameter('url', 'https://api.github.com/users/{ids}/repos')
// 		.withParameter('method', 'GET')
// 		.withParameter('headers', {
// 			'Content-Type': 'application/json',))

// const request = new HttpRequest({})

// input-->filter
// 							.0
// 							.other-->request
// 										.success-->listings
// 										.error-->failed

// input-->filter
// filter.0
// filter.other-->request
// request.

// ┌─────┐       ┌────────┐
// │input├──────►│filter  │
// └─────┘       ├────────┤
//               │        │
//               │       0│          ┌──────────────────┐
//               │   other├─────────►│http request      │
//               └────────┘          │                  │
//                                   │                  │                    ┌──────┐
//                                   │           passed ├───────────────────►│output│
//                                   │                  │                    └──────┘
//                                   │           failed ├──────────┐
//                                   │                  │          │
//                                   └──────────────────┘          │
//                                                                 │
//                                                                 │
//                                                                 │          ┌──────┐
//                                                                 └─────────►│log   │
//                                                                            └──────┘
