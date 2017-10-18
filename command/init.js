'use strict'
const co = require('co');
const prompt = require('co-prompt');
const chalk = require('chalk');
const exec = require('child_process').exec;
const CMD = require('./PromiseCmd');
const cd2 = require('./cmd2');

module.exports = () => {
  co(function *() {
    let projectName = yield prompt('projectName name: ');
    console.log(chalk.green('git clone git@github.com:sharkwarn/nodeTemplate-cli.git')); 
    let res = yield CMD('git clone git@github.com:sharkwarn/nodeTemplate-cli.git');
    if(res){
      process.exit();
    }
    console.log(chalk.green('获取远程项目成功！'));

    let res1 = yield CMD(`ren nodeTemplate-cli ${projectName}`);
    if(res1){
      process.exit();
    }
    console.log(chalk.green('重命名成功！'));
   
    const res2 = yield cd2('attrib -h .git', projectName);
    if( res2 ){
      console.log(res2);
      process.exit();
    }
    console.log('设置属性')
    const res3 =yield cd2('rd /s /q .git', projectName);
    if( res3 ){
      console.log(res3);
      process.exit();
    }
    console.log('初始化项目成功！')
    process.exit();
  });
}
