import React from "react";

class AddContact extends React.Component {

    state = {
        name: "",
        email: "",
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
            alert("Please complete all fields!");
            return;
        }
        this.props.addContactHandler(this.state);
        this.setState({ name: "", email: "" });
        this.props.history.push("/");
    };

    changeName = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    changeEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    }

    render() {
        return (
            <div className="ui main">
                <h2>Add Contact</h2>
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>Name</label>
                        <input type='text' name="name" placeholder="enter your name" value={this.state.name} onChange={this.changeName} />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type='text' name="email" placeholder="enter your Email" value={this.state.email} onChange={this.changeEmail} />
                    </div>
                    <button className="ui button blue">Add</button>
                </form>
            </div>
        );
    }
}

export default AddContact;