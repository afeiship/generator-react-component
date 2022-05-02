'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const { resolve } = require('path');
const remote = require('yeoman-remote');
const replace = require('replace-in-file');
const prompts = require('./prompts');
const yoHelper = require('@jswork/yeoman-generator-helper');

require('@jswork/next-capitalize');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the stunning ${chalk.red(
          'generator-react-component'
        )} generator!`
      )
    );

    return this.prompt(prompts).then((props) => {
      this.props = props;
      yoHelper.rewriteProps(props);
    });
  }

  writing() {
    const { type } = this.props;
    this.fs.copyTpl(
      glob.sync(resolve(this.templatePath(type), '{**,.*}')),
      this.destinationPath(),
      this.props
    );
  }
};
