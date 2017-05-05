const fs = require('fs');
const path = require('path');
const fileRegExp = require('file-regexp');
const exampleRE = /\/\*===example start===\*\/\n([a-zA-Z.{\s()<="-<_>}]*)\/\*===example end===\*\//;
const templateRE = /\/\*===properties start===\*\/([\w\s={}:.;]*)\/\*===properties end===\*\//;

const targetPropsRE = /## properties:\n```javascript\n(.*)\n```/;
const targetUsageRE = /## usage:\n```jsx\n(.*)\n```/;

let readmeFile = path.join(__dirname,'../README.MD');
let exampleFile = path.join(__dirname,'../src/dev.js');
let templateFile = path.join(__dirname,'../src/components/template.js');

let exampleRs = fileRegExp.fileGetContent(exampleFile,exampleRE);
let templateRs = fileRegExp.fileGetContent(templateFile,templateRE);


//do replace:
fileRegExp.fileReplaceContent(readmeFile,targetPropsRE,templateRs);
fileRegExp.fileReplaceContent(readmeFile,targetUsageRE,exampleRs);
