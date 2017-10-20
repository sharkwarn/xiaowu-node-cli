module.exports = (name) => {
  return (
`import React from 'react';
function ${name.slice(0,1).toUpperCase()}${name.slice(1)}(props) {
  return (
    <div>
      <span>${name}</span>
    </div>
  );
}

${name.slice(0,1).toUpperCase()}${name.slice(1)}.propTypes = {
}
export default ${name.slice(0,1).toUpperCase()}${name.slice(1)};

`    
  );
}
