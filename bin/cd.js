
'use strict'
const exec = require('child_process').exec;
const chalk = require('chalk');

const CMD = (cmdStr) => new Promise(function(resolve, reject){
  exec(cmdStr,(err, stdout, stderr) => {
    console.log(cmdStr,stdout, stderr);
    if(err) {
      console.log(chalk.red(err));
      resolve(err);
    }
    resolve();
  });
})
exec('mkdir aaa',{cwd: 'a'},(err, stdout, stderr) => {
  if(err) {
    console.log(chalk.red(err));
  }
  console.log('成功')
});
