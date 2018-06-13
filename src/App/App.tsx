import DomCreator from '../util/DomCreator';

import { Button } from '../Button/Button';

/*
export interface AppProps {
}

export interface AppState {
  text: string;
}

export class App extends DomCreator.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      text: 'world'
    };
  }

  render() {
    return <Button text={this.state.text}></Button>;
  }
}
*/

//can also just use a function instead of a class
export function App() {
  return <Button text="World"></Button>;
}
