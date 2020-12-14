import React, { Component } from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Custumer from "./custumer/Custumer.jsx";
import Article from "./article/article.jsx";
import Bill from "./bill/bill.jsx";

class Manager extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <nav>
            <a>
              <Link to={"/"}> Home </Link>
            </a>
            <a>
              <Link to={"/custumer"}> custumer </Link>
            </a>
            <a>
              <Link to={"/article"}> article </Link>
            </a>
            <a>
              <Link to={"/bill"}> bill </Link>
            </a>
          </nav>
          <div>
            <Switch>
              <Route exact path="/" component={Custumer} />
              <Route path="/custumer" component={Custumer} />
              <Route path="/article" component={Article} />
              <Route path="/bill" component={Bill} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default Manager;
ReactDom.render(<Manager />, document.getElementById("myapp"));