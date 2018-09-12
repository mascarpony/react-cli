const generateIndex4Cont = (name) => {
  return `import ${name}Container from './${name}Container.jsx';

export default ${name}Container;`
};

const generateJsx4Cont = (name) => {
  return `import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class ${name}Container extends PureComponent{

  static propTypes = {
    
  };
  
  render() {
    
  }
}`
};

const generateTests4Cont = (name) => {
  return `import React from 'react';
import renderer from 'react-test-renderer';
import ${name}Container from './${name}Container.jsx';

test('renders correctly', () => {});`
};

module.exports = { generateIndex4Cont, generateJsx4Cont, generateTests4Cont };