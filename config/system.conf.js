System.config({
  paths: {
    'npm:': 'node_modules/'
  },
  packages: {
    '.': {
      defaultExtension: 'js'
    }
  },
  map: {
    react: 'npm:react/umd/react.development.js',
    'react-dom': 'npm:react-dom/umd/react-dom.development.js',
    'aphrodite': 'npm:aphrodite/dist/aphrodite.umd.js'
  }
});
