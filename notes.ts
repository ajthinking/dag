abstract class AbstractNode {
  serialize(): string {
    return JSON.stringify(this);
  }
}

class ShallowNode extends AbstractNode {
  override deserialize(json: string): ShallowNode {
    return this;
  }
}

class NodeFactory {
  create(data: any): AbstractNode {
    const data2 = JSON.parse(data) as any;
    switch (data.__type) {
      case 'ShallowNode':
        return new ShallowNode();
      default:
        throw new Error(`Unknown node type: ${data2.type}`);
    }
  }
}
