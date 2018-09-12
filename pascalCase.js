const toPascalCase = (str) => {
  return str
    .split(/[-_]/)
    // .map(word => word.toLowerCase())
    // .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
    // .join('')
};

console.log(toPascalCase('MyCatComp'));
// export default toPascalCase;