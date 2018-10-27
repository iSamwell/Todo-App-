import React from 'react';


function ShowButton(props) {
    if(props.cbState===false) {
        return null
    }
    return (
        <button onClick={props.btnClick}>Add To Done</button>
    )
}

export class DoneButton extends React.Component {
    render() {
        return(
            <ShowButton btnClick={this.props.btnClick} cbState={this.props.cbState}/>
        )
    }
}