import noop from '@jswork/noop';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

const CLASS_NAME = 'boilerplate-react-js-component';

export default class BoilerplateReactJsComponent extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * The changed value.
     */
    value: PropTypes.object,
    /**
     * The change handler.
     */
    onChange: PropTypes.func
  };

  static defaultProps = {
    value: null,
    onChange: noop
  };

  handleClick = () => {
    console.log('click me!');
  };

  render() {
    const { className, ...props } = this.props;
    return (
      <div
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <p>
          <button
            style={{ padding: 20, width: '100%' }}
            onClick={this.handleClick}
            className="icon-play">
            Enjoy coding.
          </button>
        </p>
      </div>
    );
  }
}
