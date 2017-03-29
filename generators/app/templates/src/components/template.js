import './style.scss';
import React,{PureComponent,PropTypes} from 'react';
import classNames from 'classnames';

export default class extends PureComponent{
  static propTypes = {
    className:PropTypes.string
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={classNames('<%=project_name%>',this.props.className)}>
        Hello React!
      </div>
    );
  }
}
