'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const { resolve } = require('path');
const remote = require('yeoman-remote');
const replace = require('replace-in-file');
const prompts = require('./prompts');

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
    const done = this.async();
    const name = `boilerplate-react-${type}-component`;
    remote('afeiship', name, (_, cachePath) => {
      // copy files:
      this.fs.copyTpl(
        glob.sync(resolve(cachePath, '{**,.*}')),
        this.destinationPath(),
        this.props
      );
      done();
    });
  }

  end() {
    const { type, project_name, scope, description, ProjectName } = this.props;
    const files = glob.sync(resolve(this.destinationPath(), '{**,.*}'));

    replace.sync({
      files,
      from: [
        /boilerplate-scope/g,
        new RegExp(`boilerplate-react-${type}-component-description`, 'g'),
        new RegExp(`boilerplate-react-${type}-component`, 'g'),
        new RegExp(`BoilerplateReact${nx.capitalize(type)}Component`, 'g')
      ],
      to: [scope, description, project_name, ProjectName]
    });
  }
};
