const co = require('co');
const fs = require('fs');
const prompt = require('co-prompt');
const chalk = require('chalk');
const exec = require('child_process').exec;
const stateless = require('./statelessTemplate');

module.exports = () => {
  co(function* (){
    const name = yield prompt('Component name:');
    const res = yield Promise.resolve(fs.writeFileSync(`${name.slice(0,1).toUpperCase()}${name.slice(1)}.js`,stateless(name)));
    if( res ){
      console.log(chalk.red('组件创建失败！！'));
      return;
      process.exit();
    }
    console.log(chalk.red(`组件创建成功！！！`));
    process.exit();
  });
}
