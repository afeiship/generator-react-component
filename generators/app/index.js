'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const yoHelper = require('yeoman-generator-helper');


module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the stunning ' + chalk.red('generator-vue-component') + ' generator!'
    ));

    let prompts = [{
      type: 'input',
      name: 'project_name',
      message: 'Your project_name (eg: like this `react-button` )?',
      default: yoHelper.discoverRoot
    }, {
      type: 'input',
      name: 'description',
      message: 'Your description?'
    }, {
      type: 'list',
      name: 'react_version',
      message: 'Which React version?',
      choices: [
        "react-16",
        "react-15"
      ]
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  }

  writing() {
    yoHelper.rewriteProps(this.props);
    this._writingCopyFiles();
    this._writingTplFiles();
    this._writingTemplate();
    this._writePkgJson();
    this._cleanFiles();
  }

  _writingCopyFiles() {
    this.fs.copy(
      this.templatePath('{.*,config/*}'),
      this.destinationPath('.')
    );
  }

  _writingTplFiles() {
    this.fs.copyTpl(
      this.templatePath('{*,build/*,src/*.*,src/components/*.scss}'),
      this.destinationPath('.'),
      this.props
    );
  }

  _writePkgJson() {
    const { react_version } = this.props;
    const pkgJson = react_version === 'react-16' ? 'package-16.json' : 'package-15.json';
    this.fs.copyTpl(
      this.templatePath(pkgJson),
      this.destinationPath('package.json'),
      this.props
    );
  }

  _writingTemplate() {
    this.fs.copyTpl(
      this.templatePath('src/components/template.js'),
      this.destinationPath('src/components/' + this.props.project_name + '.js'),
      this.props
    );
  }

  _cleanFiles(){
    this.fs.delete('package-*.json');
  }

  install() {
    console.log('use `npm install --registry=https://registry.npm.taobao.org` OR `yarn install`');
  }

  end() {
    console.log('Enjoy coding~ :)');
  }
};
