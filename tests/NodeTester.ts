// import { Item } from '../src/Item';
// import { Node, NodeInput } from '../src/Node';
// import { Parameter } from '../src/Parameter';

// export const when = (prototype) => {
//   return new NodeTester(prototype);
// };

// type KeyValuePairs = { [key: string]: unknown };

// export class NodeTester {
//   inputMap: { [portName: string]: Item[] };
//   outputMap: { [portName: string]: Item[] };
//   outputs: Item[];
//   hasRun = false;
//   prototype: any;
//   node: Node;
//   parameters = [];

//   constructor(prototype) {
//     this.prototype = prototype;
//   }

//   hasParameters(parameters: KeyValuePairs): this {
//     Object.entries(parameters).forEach(([key, value]) => {
//       this.parameters.push(
//         new Parameter({
//           name: key,
//           type: typeof value,
//           value: value,
//         }),
//       );
//     });

//     return this;
//   }

//   hasInputs(inputs: { [key: string]: unknown[] }): this {
//     // Register
//     this.inputMap = {};
//     Object.entries(inputs).forEach(([key, values]) => {
//       this.inputMap[key] = values.map(
//         (value) => new Item(value),
//       );
//     });

//     return this;
//   }

//   andInputs(inputs: { [key: string]: unknown[] }): this {
//     return this.hasInputs(inputs);
//   }

//   assertOutputs(outputs: {
//     [key: string]: unknown[];
//   }): this {
//     this.outputMap = {};
//     Object.entries(outputs).forEach(([key, values]) => {
//       this.outputMap[key] = values.map(
//         (value) => new Item(value),
//       );
//     });

//     return this;
//   }

//   doAssertOutputs() {
//     Object.entries(this.outputMap).forEach(
//       ([name, items]) => {
//         const actual = this.node.itemsAtPortNamed(name);
//         const expected = items;

//         expect(actual).toEqual(expected);
//       },
//     );
//   }

//   async finish() {
//     if (!this.hasRun) {
//       this.node = new this.prototype({
//         parameters: this.parameters,
//       });
//       Object.entries(this.inputMap).forEach(
//         ([name, items]) => {
//           this.node.setItemsAtPortNamed(name, items);
//         },
//       );

//       await this.node.run();
//       this.hasRun = true;

//       this.doAssertOutputs();
//     }

//     return this;
//   }
// }
