import React, { Component } from 'react';

import "../css/bootstrap.css";
import "../css/style.css";
import NavBar from "./navbar.js";
import ListTodos from "./todo.js"

class App extends Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <NavBar  />
                <ListTodos />
            </React.Fragment>
        );
    }
}
 
export default App;




// Implement remove todos is pending