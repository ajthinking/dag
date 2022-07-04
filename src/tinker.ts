abstract class Base {
  protected abstract required(): void;
  protected optional?(): string;

  print(): void {
    console.log(
      this.optional?.() ?? 'Base',
      Boolean(this.optional)
        ? 'optional existing'
        : 'no optional',
    );
  }
}

class Child1 extends Base {
  protected required(): void {}
}

class Child2 extends Base {
  protected required(): void {}
  protected optional(): string {
    return 'Child w custom implementation';
  }
}
