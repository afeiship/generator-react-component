import './dev.scss';
import <%=ProjectName%> from './main';

/*===example start===*/
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
