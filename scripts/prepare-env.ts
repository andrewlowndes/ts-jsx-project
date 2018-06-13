import * as path from 'path';
import * as fs from 'fs';

const root = path.resolve(__dirname, '../'),
  build = root + '/build/',
  dist = root + '/dist/';

[
  [build + 'node_modules', '../node_modules'],
  [build + 'src', '../src'],
  [build + 'config', '../config'],
  [build + 'assets', '../assets'],
  [dist + 'assets', '../assets']
].forEach(([destination, relativeTarget]) => {
  try {
    fs.symlinkSync(relativeTarget, destination, 'dir');
  } catch (e) {}
});
