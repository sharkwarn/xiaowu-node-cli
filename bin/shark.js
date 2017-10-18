'use strict'
 // 定义脚手架的文件路径
process.env.NODE_PATH = __dirname + '/../node_modules/';

const program = require('commander');
program
  .version(require('../package').version );

// 定义使用方法
program
  .usage('<command>')

program
  .command('init')
  .description('init a node + es6 template')
  .alias('i')
  .action(() => {
    require('../command/init')()
  })

program.parse(process.argv)

if(!program.args.length){
  program.help()
}