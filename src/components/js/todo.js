import React, { Component } from 'react';

import "../css/bootstrap.css"
var data = require('../../media/data.json');

class Todo extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="todo">
                <label className="title"> { this.props.title }</label>
                <input type="checkbox" defaultChecked= { this.props.isChecked } onClick={() => this.props.onClick(this.props.id)} /> 
                <label className="desc">{ this.props.desc }</label>
            </div>
         );
    }
}
 

class ListTodos extends Component {     
    /*state = { 
        data: [
            {
                id:1,
                title: "Save money",
                desc: "Dont waste money, Future will be secured",
                isChecked: false,
                isRemoved: false
            },
            {
                id:2,
                title: "Wake up early",
                desc: "Wake up early and make a daily routine, work better",
                isChecked: false,
                isRemoved: false
            },{
                id:3,
                title: "Wake up early",
                desc: "Wake up early and make a daily routine, work better",
                isChecked: false,
                isRemoved: false
            },{
                id:4,
                title: "Wake up early",
                desc: "Wake up early and make a daily routine, work better",
                isChecked: false,
                isRemoved: false
            },{
                id:5,
                title: "Wake up early",
                desc: "Wake up early and make a daily routine, work better",
                isChecked: false,
                isRemoved: false
            }
        ],
        idCounter: 2,
     }
    
    //*/state = data;

    inputChanged = (id) => {
        console.log(id);
        let data = this.state.data;
        data.forEach( (item) => {
            if (item.id === id) {
                item.isChecked = item.isChecked ? false : true;
            }
        })
        this.setState({ data })
    }
    
    closenew() {
        document.querySelector('#addtodo').style.display = 'none';
        console.log("Clicked");
    }
    addnew() {
        console.log("button clicked");
        let data = this.state.data;
        let title = document.getElementById('title');
        let desc = document.getElementById('desc');
        console.log(title, desc);
        if (title.value==="") {
            alert("Empty todo can't be inserted");
        } else {
            const d = desc.value;
            data.unshift({
                id: this.state.idCounter + 1,
                title: title.value,
                desc: d === ""? "No Description":d,
                isChecked: false,
                isRemoved: false
            });
            this.setState({ idCounter: this.state.idCounter + 1 });
            this.setState({ data });
            title.value = "";
            desc.value = "";
            document.getElementById('addtodo').style.display="none";
            console.log("succed: key" + this.state.idCounter);
        }
    }
    closeselection(){
        let showAll = this.state.showAll;
        document.getElementById("selectionBar").style.display = "none";
        let elems = document.querySelectorAll(".todo input");
        for(let i=0; i<elems.length;i++){
            elems[i].style.display = "none";
        }
        if (showAll) { 
            this.showAll();
        }
    }
    /*
    selectAll() {
        let data = this.state.data
        data.forEach((item) => {
            if (!item.isRemoved){
                item.isChecked = true;
            } 
        });

        this.setState({ data });
        console.log("selectAll", this.state.data);

    }
    deselectAll() {
        let data = this.state.data
        data.forEach( (item) => {
            if (!item.isRemoved){
                item.isChecked = false;
            } 
        });
        this.setState({data});
        console.log("deselectAll", this.state.data);

    }
    invertSelection() {
        let data = this.state.data
        data.forEach( (item) => {
            if (!item.isRemoved){
                item.isChecked = item.isChecked ? false : true;
            } 
        });
        this.setState({data});
        console.log("invert", this.state.data);

    }*/
    removed() {
        let data = this.state.data
        data.forEach( (item) => {
            if (!item.isRemoved && item.isChecked){
                item.isRemoved = true;
            } 
        });
        this.setState({ data });
        console.log("remove");
    }
    removeAll() {
        let data = this.state.data
        data.forEach( (item) => {
            if (!item.isRemoved){
                item.isRemoved = true;
            } 
        });
        this.setState({ data });

    }
    showAll() {
        let showAll = this.state.showAll;
        if (showAll) {
            showAll = false;
        } else {
            showAll = true;
        }
        this.setState({ showAll });        
    }

    savework() {
        let data = JSON.stringify(this.state)
        let fs = require('fs')
        fs.watchFile("../../media/data.json", data)
    }
    todorender() {
        return (this.state.data.map( (item, key) => {
                if (item.isRemoved === false || this.state.showAll) {
                    return (
                        < Todo key={key} id={ item.id } title = { item.title } desc = { item.desc } isChecked = { item.isChecked } onClick={this.inputChanged}/>
                    );
                } else {
                    return null;
                }
        }));

    }
    render() { 

        return (  
            <React.Fragment>
                <div id="selectionBar">
                    <a id='close' onClick={ ()=> this.closeselection() }>+</a>
                    <button id="showAll" onClick={ () =>this.showAll() }>{ this.state.showAll ? "Don't Show All" : "Show All Todos" }</button>
                    <button id="remove" onClick={ () => { if (window.confirm("Are you sure to remove?")) this.removed() }}>Remove</button>
                    <button id="removeAll" onClick={() => { if (window.confirm("Are you sure to remove all?")) this.removeAll() } }>Remove All</button>
                    <button id="savework" onClick={() => this.savework() }>Save Work</button>
                </div>
                <div id='addtodo'>
                    <div id='addtodoContent'>
                        <div id='close' onClick={this.closenew}>+</div>
                        <img src="https://img.icons8.com/dusk/128/000000/user-male.png" alt='form logo'/>
                        <input type='text'id='title' name='title' placeholder="Enter title" />
                        <textarea name='desc'id='desc' placeholder="More Description" />
                        <button id="submit" onClick= {() => this.addnew()}>Submit</button>                     
                    </div>
                </div>
                <div id="todo-section"> 
                    { this.todorender() }
                </div>
            </React.Fragment>
        );
    }
}
 
export default ListTodos;