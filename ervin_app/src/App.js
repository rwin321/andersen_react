import { Component } from "react";
import Form from "./components/Form";
import "./App.css";
import Todos from "./components/todos/Todos";
import { Switch, Route, NavLink } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { counter: 0, todos: [] };
  }

  componentDidMount() {
    console.log("APP mount");
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((res) => this.setState({ todos: res }));
  }
  componentDidUpdate() {
    console.log("APP update");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("APP derived STATE from Props");
    return null;
  }
  render() {
    console.log("APP render 1");
    return (
      <div className="App">
        <nav className="navbar">
          <div>
            <NavLink to="/form">form</NavLink>
          </div>
          <div>
            <NavLink to="/todos">todos </NavLink>
          </div>
        </nav>
        <div className="content">
          <Switch>
            <Route path="/form">
              <Form
                counter={this.state.counter}
                setCounter={this.setState.bind(this)}
              />
            </Route>
            <Route path="/todos">
              <Todos todos={this.state.todos} />
            </Route>
            {console.log("APP render 2")}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
