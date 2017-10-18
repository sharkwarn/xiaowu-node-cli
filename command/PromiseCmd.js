
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


module.exports = CMD;