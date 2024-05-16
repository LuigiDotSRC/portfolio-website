import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import ProjectsView from './pages/ProjectsView';
import TimelineView from './pages/TimelineView';
import ArchiveView from './pages/ArchiveView';
import ContactView from './pages/ContactView';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="/projects" />
        </Route>
        <Route path="/projects" component={ProjectsView} />
        <Route path="/timeline" component={TimelineView} />
        <Route path="/archive" component={ArchiveView} />
        <Route path="/contact" component={ContactView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
