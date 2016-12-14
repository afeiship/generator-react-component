import './dev.scss';
import <%=ProjectName%> from './main';


class App extends React.Component{
  render(){
    return (
      <div className="hello-<%=project_name%>">
        <<%=ProjectName%> />
      <div>
    );
  }
}


ReactDOM.render(
    <App />,
    document.getElementById('app')
);
