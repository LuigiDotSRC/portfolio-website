import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProjectsView from './pages/ProjectsView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={ProjectsView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
