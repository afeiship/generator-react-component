# boilerplate-react-js-component
> boilerplate-react-js-component-description

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @boilerplate-scope/boilerplate-react-js-component
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | object | false    | null    | The changed value.                    |
| onChange  | func   | false    | noop    | The change handler.                   |


## usage
1. import css
  ```scss
  @import "~@boilerplate-scope/boilerplate-react-js-component/dist/style.css";

  // or use sass
  @import "~@boilerplate-scope/boilerplate-react-js-component/dist/style.scss";

  // customize your styles:
  $boilerplate-react-js-component-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import BoilerplateReactJsComponent from '@jswork/boilerplate-react-js-component';
  import './assets/style.scss';

  class App extends React.Component {
    render() {
      return (
        <ReactDemokit
          className="p-3 app-container"
          url="https://github.com/afeiship/boilerplate-react-js-component">
          <BoilerplateReactJsComponent className="mb-5 has-text-white" />
          <button className="button is-primary is-fullwidth">Start~</button>
        </ReactDemokit>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/boilerplate-react-js-component/


## license
Code released under [the MIT license](https://github.com/afeiship/boilerplate-react-js-component/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/boilerplate-react-js-component
[version-url]: https://npmjs.org/package/@jswork/boilerplate-react-js-component

[license-image]: https://img.shields.io/npm/l/@jswork/boilerplate-react-js-component
[license-url]: https://github.com/afeiship/boilerplate-react-js-component/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/boilerplate-react-js-component
[size-url]: https://github.com/afeiship/boilerplate-react-js-component/blob/master/dist/boilerplate-react-js-component.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/boilerplate-react-js-component
[download-url]: https://www.npmjs.com/package/@jswork/boilerplate-react-js-component
