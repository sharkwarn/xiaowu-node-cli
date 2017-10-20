const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const exec = require('child_process').exec;
const fs = require('fs');
const template = require('./componentTemplate');

module.exports = () => {
  co(function* (){
    let projectName = yield prompt('Component name: ');
    console.log(chalk.green(`你创建的Component的名字是——————————————————`));
    console.log(chalk.blue(`狗蛋！！！！！！！！！！！！`));
    let res = yield Promise.resolve(fs.writeFileSync(
      `${projectName.slice(0,1).toUpperCase()}${projectName.slice(1)}.js`,
      template(projectName)
    ));
  if( res ){
    console.log(chalk.red(res));
    console.log(chalk.red('Component狗蛋创建失败！！！！！！'));
    process.exit();
    return;
  }
  console.log(chalk.green('Component狗蛋创建成功！！！！！！！！'));
  process.exit();
  });
}
