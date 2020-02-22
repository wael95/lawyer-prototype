import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Header } from "./components/layouts";
import Issues from "./components/issues/issues";
// import { bindActionCreators } from "redux";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import AddIssue from "./components/issues/addIssue";
import Reports from './components/reports/reports';
import Archive from './components/archive/archive';
import AddClient from './components/clients/AddClient';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
        <Route exact path="/">
            <Issues />
          </Route>
          <Route path="/issues">
            <Issues />
          </Route>
          <Route path="/addIssue">
          <AddIssue />
          </Route>
          <Route path="/reports">
          <Reports />
          </Route>
          <Route path="/archive">
          <Archive />
          </Route>
          <Route path="/addClient">
          <AddClient />
          </Route>
        </Switch> 
      </Router>
    );
  }
}

const mapstatetoprops = state => {
  console.log(state);
  return {
    Courts: state.Courts
  };
};
/* function helps binding the actions to be used in the page */
// const matchDispatchToProps = dispatch => {
//   return bindActionCreators({ fetch: FetchRest }, dispatch);
// };
/* connect is to wrap the page in the redux store */
export default connect(mapstatetoprops)(App);
