import React from 'react'

const input = {
    border: "1px solid #e7e7e7",
    backgroundColor: "#fff",
    color: "inherit",
    fontFamily: "inherit",
    fontSize: "14px",
    padding: "12px 15px",
    borderRadius: "5px",
    transition: "border 0.3s",
    width: "400px",
    position: "center"
};

const form = {
    width: "33%",
    marginLeft: "30%",
    position: "fixed"

}

export class AddNewTask extends React.Component {
    constructor() {
        super();
        this.justSubmitted = this.justSubmitted.bind(this);
    }

    justSubmitted(event) {
        event.preventDefault();
        let input = event.target.querySelector('input');
        let value = input.value;
        input.value = '';
        this.props.updateList(value);
    }

    render() {
        return(
            <form style={form} onSubmit={this.justSubmitted}>
                <input style={input} type="text" placeholder="Add Todo"/>
            </form>
        )
    }
}