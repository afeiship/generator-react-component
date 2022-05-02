'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const MAIN = '@jswork/react-component';

module.exports = class extends Generator {
  writing() {
    const ctx = yoHelper.ctx;
    this.composeWith(`${MAIN}:base`);

    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      { ...this.props, ctx }
    );
  }
};
