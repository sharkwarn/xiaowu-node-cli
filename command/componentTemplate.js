module.exports = (name) => {
  return (
`import React from 'react';

class ${name.slice(0,1).toUpperCase()}${name.slice(1)} extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <span>${name.slice(0,1).toUpperCase()}${name.slice(1)}</span>
      </div>
    );
  }
}

export default ${name.slice(0,1).toUpperCase()}${name.slice(1)};

`);
}
