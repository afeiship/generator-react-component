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

  _writingTemplate() {
    this.fs.copyTpl(
      this.templatePath('src/components/template.js'),
      this.destinationPath('src/components/' + this.props.project_name + '.js'),
      this.props
    );
  }

  install() {
    console.log('use ` yarn install `');
  }

  end() {
    console.log('Enjoy coding~ :)');
  }
};
