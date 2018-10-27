import React from 'react';
import {AddNewTask} from "./addtask";
import {TodoList} from "./applist";
import {DoneList} from "./donelist";
import {DoneButton} from "./button";

const bg = require('./assets/bg.jpg');

/*i had a problem/error using image for the div with the style below, i resolved it by
 * installing file-loader and image-webpack-pack loader packages and also did
 * the necessary configuration in the webpack.config.js file  */
const header = {
    height: "40vh",
    backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(" + bg + ")",
    backgroundSize: "cover",
    backgroundPosition: "relative"

};

const addTaskContainer = {
    padding: "10px",
    borderBottom: "1px solid #e7e7e7",
    backgroundColor: "rgb(255, 99, 71, 0.3)",
    display: "flex",
    height: "40px"
};

const container = {
    width: "100%"
}
const todoList = {
    float: "left",
    width: "30%"
}
const doneList = {
    float: "left",
    width: "30%",
    marginLeft: "200px"
}
export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state = {
            tasks: props.tasks,
            isChecked: false,
            doneTasks: [],
            btnClicked: []
        }
        this.updateList = this.updateList.bind(this);
        this.removeTask = this.removeTask.bind(this);
        this.getCheckboxState = this.getCheckboxState.bind(this);
        this.getCheckboxesValues = this.getCheckboxesValues.bind(this);
        this.showDoneTasks = this.showDoneTasks.bind(this);
    }
    updateList(text) {
        let updatedTask = this.state.tasks
        updatedTask.unshift(text);
        this.setState({tasks: updatedTask})
        this.updateLocalStorage(updatedTask);
    }

    removeTask(text) {
        let updatedTask = this.state.tasks
        updatedTask.splice(updatedTask.indexOf(text), 1);
        this.setState({tasks: updatedTask})
        this.updateLocalStorage(updatedTask);
    }

    updateLocalStorage(updatedTasks) {
        localStorage. setItem('storedTasks', JSON.stringify(updatedTasks))
    }
    getCheckboxState(state) {
        if(state){
            this.setState({
                isChecked: true
            })
        }
        else {
            this.setState({
                isChecked: false
            })
        }
    }

    getCheckboxesValues(value) {
        this.setState({
            doneTasks: value
        })
    }

    showDoneTasks() {
        this.setState({
            btnClicked: this.state.doneTasks
        })

    }

    render() {
        return (
            <div>
                <div style={header}></div>
                <div style={addTaskContainer}>
                    <DoneButton btnClick={this.showDoneTasks} cbState={this.state.isChecked}/>
                    <AddNewTask updateList={this.updateList} />

                </div>

                <div style={container}>
                    <div style={todoList}>
                        <TodoList cbState={this.getCheckboxState}
                                  cbValues={this.getCheckboxesValues}
                                  tasks={this.state.tasks}
                                  remove={this.removeTask}/>
                    </div>
                    <div style={doneList}><DoneList doneTasks={this.state.btnClicked} /></div>
                </div>
            </div>
        );
    }
}