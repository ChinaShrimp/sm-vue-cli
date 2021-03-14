#!/usr/bin/env node

const program = require('commander');
const download = require('download-git-repo');
const chalk = require('chalk');

program
    .version(require('./package.json').version, '-v, --version')
    .command('init <name>')
    .action(name => {
        let destDirName = name.trim();

        if (!destDirName) {
            console.log(chalk.red('请输入合法的目录名称'));
            return;
        }

        download('ChinaShrimp/jamstack-intro-auth', destDirName, err => {
            console.log(err ? chalk.red("创建失败"+err): chalk.green("创建成功"));
        });
    });

program.parse(process.argv);