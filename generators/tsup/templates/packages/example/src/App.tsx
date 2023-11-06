import TheComponent from '@<%= scope %>/<%= project_name %>';
import '@<%= scope %>/<%= project_name %>/src/style.scss';
import './App.css';


function App() {
  return (
    <>
      <h1><%= project_name %></h1>
      <TheComponent
        onClick={() => {
          console.log('click me');
        }}>
        Click me
      </TheComponent>
    </>
  );
}

export default App;
