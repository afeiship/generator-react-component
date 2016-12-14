import './style.scss';
import classNames from 'classnames';

export default class extends React.Component{
  static propTypes = {
    cssClass:React.PropTypes.string
  };

  static defaultProps = {
    
  };

  render(){
    return (
      <div className={classNames('<%=project_name%>',this.props.cssClass)}>
        Hello React!
      </div>
    );
  }
}
