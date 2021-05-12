import "./styles/main.scss";
import { Switch, Route } from "react-router-dom";
import About from "./components/About";
import Contacts from "./components/contacts/Contacts";
import Home from "./components/Home";
import Users from "./components/users/Users";
import Navbar from "./components/Navbar";
import WithSuspense from "./hocs/withSuspense";
import withMounted from "./hocs/withMounted";

const App = () => {
  console.log("APP was rendered");
  return (
    <div className="app-wrapper">
      <Navbar />
      <Switch>
        <div className="wrapper-content">
          <Route
            exact
            path="/"
            render={WithSuspense(() => (
              <Home />
            ))}
          />
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users" component={withMounted(Users)} />
          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </div>
      </Switch>
    </div>
  );
};

export default App;
