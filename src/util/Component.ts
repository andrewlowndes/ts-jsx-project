import { RenderResult } from './RenderResult';

export abstract class Component<P = object, S = object> {
  props: P;
  state: S;

  constructor(props: P) {
    this.props = props;
  }

  render(): RenderResult {
    return null;
  }
}
