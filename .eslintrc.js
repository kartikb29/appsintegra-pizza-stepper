module.exports = {
  'env': {
    'browser': true,
    'es6': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly',
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 2018,
    'sourceType': 'module',
  },
  "parser": "babel-eslint",
  'plugins': [
    'react',
    'babel'
  ],
  'rules': {
    "require-jsdoc" : 0,
    "strict": 0,
    "max-len": 0,
    "no-invalid-this": 0,
    "react/prop-types": 0
  },
};
