const fs = require('fs');
const args = process.argv.slice(2);
const rootDir = require('./dir').dir;
const { generateIndex4Comp, generateJsx4Comp, generateTests4Comp } = require('./templates/component');
const { generateIndex4Cont, generateJsx4Cont, generateTests4Cont } = require('./templates/container');

generateComponent = (name) => {
  const compDir = 'components/';
  if (!fs.existsSync(`${rootDir}${compDir}`)){
    fs.mkdirSync(`${rootDir}${compDir}`);
  }
  const personalDir = `${name}Component/`;
  const path = `${rootDir}${compDir}${personalDir}`;
  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
    fs.writeFileSync(`${path}index.js`, generateIndex4Comp(name), 'utf8');
    fs.writeFileSync(`${path}${name}Component.jsx`, generateJsx4Comp(name), 'utf8');
    fs.writeFileSync(`${path}${name}Component.css`, '', 'utf8');
    fs.writeFileSync(`${path}${name}Component.spec.js`, generateTests4Comp(name), 'utf8');
  } else {
    console.log(`${name}Component already exist`);
  }
};

generateContainer = (name) => {
  const contDir = 'containers/';
  if (!fs.existsSync(`${rootDir}${contDir}`)){
    fs.mkdirSync(`${rootDir}${contDir}`);
  }
  const personalDir = `${name}Container/`;
  const path = `${rootDir}${contDir}${personalDir}`;
  if (!fs.existsSync(path)){
    fs.mkdirSync(path);
    fs.writeFileSync(`${path}index.js`, generateIndex4Cont(name), 'utf8');
    fs.writeFileSync(`${path}${name}Container.jsx`, generateJsx4Cont(name), 'utf8');
    fs.writeFileSync(`${path}${name}Container.spec.js`, generateTests4Cont(name), 'utf8');
  } else {
    console.log(`${name}Container already exist`);
  }
};

changeDir = (name) => {
  console.log('We make this feature in the future. Try to believe!')
};

const [type, name] = args;

switch (type) {
  case 'help':
    return console.log(`
    ----------------------------- react-cli -----------------------------
    use 'generate' or 'g'
    'generate component <name>' or 'g c <name>' generates react component
    'generate container <name>' generates react container
    ---------------------------------------------------------------------
    `);
  case 'component':
    return generateComponent(name);
  case 'c':
    return generateComponent(name);
  case 'container':
    return generateContainer(name);
  case 'dir':
    return changeDir(name);
  default:
    return console.error(`Wrong command. Use 'generate help' for getting help.`)
}


