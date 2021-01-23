const yoHelper = require('@jswork/yeoman-generator-helper');

const types = [
  { name: 'javascript', value: 'js' },
  { name: 'typescript', value: 'ts' }
];

require('@jswork/next-registry-choices');

module.exports = [
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
