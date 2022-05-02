# <%= project_name %>
> <%= description %>

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @<%= scope %>/<%= project_name %>
```

## usage
1. import css
  ```scss
  @import "~@<%= scope %>/<%= project_name %>/dist/style.css";

  // or use sass
  @import "~@<%= scope %>/<%= project_name %>/dist/style.scss";

  // customize your styles:
  $<%= project_name %>-options: ()
  ```
2. import js
  ```js
  import React from 'react';
  import <%- ctx.camelize(project_name) %> from '@<%= scope %>/<%= project_name %>';
  import styled from 'styled-components';

  export default function Component() {
    const { value, setValue, setTrue, setFalse, toggle } = <%- ctx.camelize(project_name) %>(false)

    // Just an example to use "setValue"
    const customToggle = () => setValue(x => !x)

    return (
      <>
        <p>
          Value is <code>{value.toString()}</code>
        </p>
        <button onClick={setTrue}>set true</button>
        <button onClick={setFalse}>set false</button>
        <button onClick={toggle}>toggle</button>
        <button onClick={customToggle}>custom toggle</button>
      </>
    )
  }
  ```

## preview
- https://afeiship.github.io/<%= project_name %>/

## license
Code released under [the MIT license](https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@<%= scope %>/<%= project_name %>
[version-url]: https://npmjs.org/package/@<%= scope %>/<%= project_name %>

[license-image]: https://img.shields.io/npm/l/@<%= scope %>/<%= project_name %>
[license-url]: https://github.com/afeiship/<%= project_name %>/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@<%= scope %>/<%= project_name %>
[size-url]: https://github.com/afeiship/<%= project_name %>/blob/master/dist/<%= project_name %>.min.js

[download-image]: https://img.shields.io/npm/dm/@<%= scope %>/<%= project_name %>
[download-url]: https://www.npmjs.com/package/@<%= scope %>/<%= project_name %>
