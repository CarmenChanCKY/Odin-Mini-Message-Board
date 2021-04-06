import MessageBoxPage from "./pages/message-box-page/message-box-page.js";
import NewMessagePage from "./pages/new-message-page/new-message-page.js";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={MessageBoxPage} />
      <Route path="/new" component={NewMessagePage} />
    </Switch>
  );
}
export default App;
