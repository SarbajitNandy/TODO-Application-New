import React, { Component } from 'react';

class NavBar extends Component {
    state = { 
        
     }
    
    addTodo() {
        document.querySelector('#addtodo').style.display = 'flex';
    } 
    removeTodo() {
        document.getElementById('selectionBar').style.display = "block";
        let elems = document.querySelectorAll(".todo input");
        for(let i=0; i<elems.length;i++){
            elems[i].style.display = "block";
        }
    }
    
    render() { 
        return (  
            <React.Fragment>
                <div id="Brand">My Todo App</div>
                <div id="nav_bar">
                <ul>
                    <li key='1'><a >Home</a></li>
                    <li key='2'><a onClick={this.addTodo}>Add Todo</a></li>
                    <li key='3'><a onClick={this.removeTodo}>Remove Todo</a></li>
                </ul>
                </div>
            </React.Fragment>
);
    }
}
 
export default NavBar;