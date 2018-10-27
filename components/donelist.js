import React from 'react';


const doneStyle = {
    padding: "1px",
    borderBottom: "1px solid #e7e7e7",
    backgroundColor: "rgb(0,200,40,0.6)",
    width: "100%"
}
const style ={
    width: "100%",
}

export class DoneList extends React.Component {

    render() {
        let doneTasks = this.props.doneTasks.map((elem, i)=> {
            return <div style={doneStyle} key={i}>{elem}</div>})
        return(
            <div style={style}>
                <p style={{marginTop: "0px", marginBottom: "0px"}}>Completed</p>
                {doneTasks}

            </div>
        )
    }
}