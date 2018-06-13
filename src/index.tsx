import DomCreator from './util/DomCreator';

import { App } from './App/App';

function load() {
  document.getElementById('root').appendChild(<App />);
}

function bootstrap() {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => load());
  } else {
    load();
  }
}

bootstrap();
