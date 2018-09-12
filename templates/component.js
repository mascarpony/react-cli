const generateIndex4Comp = (name) => {
  return `import ${name}Component from './${name}Component.jsx';

export default ${name}Component;`
};

const generateJsx4Comp = (name) => {
  return `import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './${name}Component.css';

export default class ${name}Component extends Component{

  static propTypes = {
    
  };
  
  render() {
    
  }
}`
};

const generateTests4Comp = (name) => {
  return `import React from 'react';
import renderer from 'react-test-renderer';
import ${name}Component from './${name}Component.jsx';

test('renders correctly', () => {});`
};

module.exports = { generateIndex4Comp, generateJsx4Comp, generateTests4Comp };

