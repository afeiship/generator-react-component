'use strict';
const Generator = require('yeoman-generator');
const yosay = require('yosay');
const globby = require('globby');
const { resolve } = require('path');
const prompts = require('./prompts');
const yoHelper = require('@jswork/yeoman-generator-helper');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the stunning 'generator-react-component' generator!`)
    );

    return this.prompt(prompts).then((props) => {
      this.props = props;
      yoHelper.rewriteProps(props);
    });
  }

  writing() {
    const { type } = this.props;
    this.fs.copyTpl(
      globby.sync(resolve(this.templatePath(type), '{**,.*}')),
      this.destinationPath(),
      this.props
    );
  }
};
