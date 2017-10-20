#!/usr/bin/env node
'use strict'

var program = require('commander');
program
  .version(require('../package').version );

// 定义使用方法
program
  .usage('<command>')

program
  .command('init')
  .description('init a node + es6 template')
  .alias('i')
  .action(function(){
    require('../command/init')()
  })

program
  .command('model')
  .description('create Model')
  .alias('m')
  .action(function(){
    require('../command/model')()
  })

program
  .command('component')
  .description('create component')
  .alias('m')
  .action(function(){
    require('../command/component')()
  })

program
  .command('stateless')
  .description('create stateless component')
  .alias('m')
  .action(function(){
    require('../command/stateless')()
  })
program.parse(process.argv)

if(!program.args.length){
  program.help()
}
