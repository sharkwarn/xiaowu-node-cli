const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const exec = require('child_process').exec;
const fs = require('fs');
const template = require('./modelTemplate');

module.exports = () => {
  co(function* (){
    let projectName = yield prompt('Model name: ');
    console.log(chalk.green(`你创建的model的名字是——————————————————`));
    console.log(chalk.blue(`狗蛋！！！！！！！！！！！！`));
    let res = yield Promise.resolve(fs.writeFileSync(`${projectName}.js`, template(projectName)));
    if( res ){
      console.log(res);
      console.log(chalk.red('狗蛋创建失败！！！！！！'));
      return;
    }
    console.log(chalk.green('狗蛋创建成功！！！！！！！！'));
    process.exit();
  });
}
