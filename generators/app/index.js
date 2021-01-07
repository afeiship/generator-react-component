'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const glob = require('glob');
const { resolve } = require('path');
const remote = require('yeoman-remote');
const yoHelper = require('@jswork/yeoman-generator-helper');
const replace = require('replace-in-file');

const types = [
  { name: 'javascript', value: 'js' },
  { name: 'typescript', value: 'ts' }
];

require('@jswork/next-registry-choices');
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

    const prompts = [
      {
        type: 'scope',
        name: 'scope',
        message: 'Your scope (eg: @babel )?',
        default: 'jswork'
      },
      {
        type: 'list',
        name: 'registry',
        message: 'Your registry',
        choices: nx.RegistryChoices.gets()
      },
      {
        type: 'list',
        name: 'type',
        message: 'Your language type?(js/ts)',
        choices: types
      },
      {
        type: 'input',
        name: 'project_name',
        message: 'Your project_name (eg: like this `react-button` )?',
        default: yoHelper.discoverRoot
      },
      {
        type: 'input',
        name: 'description',
        message: 'Your description?',
        validate: Boolean
      }
    ];

    return this.prompt(prompts).then(
      function(props) {
        // To access props later use this.props.someAnswer;
        this.props = props;
        yoHelper.rewriteProps(props);
      }.bind(this)
    );
  }

  writing() {
    const { type } = this.props;
    const done = this.async();
    const name = `boilerplate-react-${type}-component`;
    remote('afeiship', name, (_, cachePath) => {
      // copy files:
      this.fs.copy(
        glob.sync(resolve(cachePath, '{**,.*}')),
        this.destinationPath()
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
