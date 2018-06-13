module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      '../node_modules/systemjs/dist/system.js',
      './system.conf.js',
      { pattern: '../src/**/*.tsx' },
      { pattern: '../src/**/*.ts' }
    ],
    exclude: [
      '../src/index.tsx'
    ],
    preprocessors: {
      '../scripts/*.ts': 'karma-typescript',
      '../src/**/*.tsx': 'karma-typescript',
      '../src/**/*.ts': 'karma-typescript'
    },
    reporters: ['dots', 'karma-typescript'],
    browsers: ['Chrome'],
    karmaTypescriptConfig: {
      extends: './tsconfig.json',
      compilerOptions: {
        allowSyntheticDefaultImports: true,
        sourceMap: true,
        moduleResolution: "node",
        target: "es6",
        jsx: "react",
        reactNamespace: "DomCreator"
      },
      include: [
        '../src/**/*'
      ],
      exclude: [
        '../src/index.tsx'
      ],
      reports: {
        "cobertura": {
          "directory": "coverage",
          "filename": "../cov.xml"
        },
        "html": "coverage"
      },
      coverageOptions: {
        exclude: /\.(d|spec|style)\.tsx?$/i
      }
    }
  });
};
