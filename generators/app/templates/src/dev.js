import './dev.scss';
import <%=ProjectName%> from './main';

/*===example start===*/

// install: npm install afeiship/<%=project_name%> --save
// import : import <%=ProjectName%> from '<%=project_name%>'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-<%=project_name%>">
        <%=ProjectName%> ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
