'use strict'
const exec = require('child_process').exec;
const chalk = require('chalk');

const CMD2 = (cmdStr, path) => new Promise(function(resolve, reject){
  exec(cmdStr,{cwd: path},(err, stdout, stderr) => {
    console.log(cmdStr,stdout, stderr);
    if(err) {
      console.log(chalk.red(err));
      resolve(err);
    }
    resolve();
  });
})


module.exports = CMD2;