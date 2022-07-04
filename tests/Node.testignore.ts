// import { Node } from '../src/Node';

// describe('constructor', () => {
//   it('can instanciate with default settings', () => {
//     expect(new DoNothing()).toBeInstanceOf(DoNothing);
//   });

//   it('recieves a random id if not explicitly passed', () => {
//     const node = new DoNothing();
//     expect(typeof node.id).toBe('string');
//     expect(node.id.length).toBe(8);
//   });

//   it('recieves a name from the constructor if not explicitly passed', () => {
//     const node = new DoNothing();
//     expect(node.name).toBe('DoNothing');
//   });

//   it('can instanciate with explicit id', () => {
//     const node = new DoNothing({ id: 'some-id' });
//     expect(node.id).toBe('some-id');
//   });

//   it('can instanciate with explicit name', () => {
//     const node = new DoNothing({ name: 'my-node' });
//     expect(node.name).toBe('my-node');
//   });
// });

// describe('run', () => {
//   it('return itself', async () => {
//     const node = new DoNothing();
//     const result = await node.run();

//     expect(result.id).toEqual(node.id);
//   });
// });

// // describe('isStarter', () => {
// //   it('returns true when start is implemented', () => {

// //     const node = new Starter();
// //     expect(node.isStarter()).toBe(true);
// //   });
// // });
