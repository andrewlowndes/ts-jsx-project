import DomCreator from '../util/DomCreator';
import { RenderResult } from '../util/RenderResult';

export interface ButtonProps {
  text: string;
}

export class Button extends DomCreator.Component<ButtonProps> {
  constructor(props: ButtonProps) {
    super(props);
  }

  render(): RenderResult {
    return <>Hi <button onclick={this._run}>{this.props.text}</button></>;
  }

  private _run = () => {
    alert('clicked');
  }
}
