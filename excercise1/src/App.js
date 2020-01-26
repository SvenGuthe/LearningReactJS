import React, {Component} from 'react';
import './App.css';
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {

  state = {
    usernames: [
      {
        username: "Sven"
      },
      {
        username: "Oliver"
      },
      {
        username: "Tina"
      }
    ]
  }

  changeName = (event) => {
    this.setState({
      usernames: [
        {
          username: event.target.value
        },
        {
          username: "Oliver"
        },
        {
          username: "Tina"
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <UserInput changeName={this.changeName} default={this.state.usernames[0].username}></UserInput>
        <UserOutput username={this.state.usernames[0].username}></UserOutput>
        <UserOutput username={this.state.usernames[1].username}></UserOutput>
        <UserOutput username={this.state.usernames[2].username}></UserOutput>
      </div>
    );
  }
}

export default App;
