import './dev.scss';
import <%=ProjectName%> from './main';

/*===example start===*/

// install: npm install afeiship/<%=project_name%> --save
// import : import <%=ProjectName%> from '<%=project_name%>'

class App extends React.Component{
  render(){
    return (
      <div className="hello-<%=project_name%>">
        <<%=ProjectName%> />
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
