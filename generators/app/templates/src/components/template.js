import './style.scss';
import React,{PropTypes} from 'react';
import classNames from 'classnames';

export default class extends React.PureComponent{
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
