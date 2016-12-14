import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    return (
      <div className={classNames('<%=project_name%>',this.props.cssClass)}>
        Hello React!
      </div>
    );
  }
}
