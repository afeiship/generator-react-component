'use strict';
const Generator = require('yeoman-generator');
const globby = require('globby');
const yoHelper = require('@jswork/yeoman-generator-helper');
const genp = require('@jswork/generator-prompts');
const prompts = genp(['scope', 'registry', 'project_name', 'description']);

module.exports = class extends Generator {
  writing() {
    const ctx = yoHelper.ctx;
    this.fs.copyTpl(
      globby.sync(this.templatePath('**'), { dot: true }),
      this.destinationPath(),
      { ...this.props, ctx }
    );
  }
};
