import React from 'react';

const item = {
    padding: "1px",
    borderBottom: "1px solid #e7e7e7",
    backgroundColor: "rgb("+Math.floor(Math.random()*255)+ ","+ Math.floor(Math.random()*255)+ ","+
    Math.floor(Math.random()*255)+ ", 0.4)",
    width: "100%"
};
const button = {
    float: "right"
};
const todo = {
    width: "100%"
}
 export class TodoList extends React.Component {
     constructor() {
         super();
         this.remove = this.remove.bind(this);
         this.isAllChecked = this.isAllChecked.bind(this);

     }
     remove(elem) {
         let value = elem.target.parentNode.querySelector('span').innerText;
         this.props.remove(value);
     }
     isAllChecked() {
         let cBoxes = document.getElementsByClassName("cb")
         let isChecked = false;
         let values = Array(cBoxes.length)

         for(let i=0; i<cBoxes.length; i++) {
             if(cBoxes[i].checked === true) {
                 values[i] = cBoxes[i].value;
                 isChecked = true;
             }
         }
         this.props.cbValues(values);
         this.props.cbState(isChecked);
     }

     render() {

         let items = this.props.tasks.map((elem, i)=> {
             return <div style={item} key={i}><span>{elem}</span>
                 <input className = "cb" name="tasks" value={elem} onChange={this.isAllChecked} style={{float: "left"}} type="checkbox"/>
                 <button style={button} onClick={this.remove}>X</button></div>
         });
         return(
             <div style={todo}>
                 Todo List
                 {items}
             </div>
         )
     }
 }