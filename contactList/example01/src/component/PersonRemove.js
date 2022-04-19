import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const PersonRemove = () => {

    state = {
        id: ''
    }

    handleChange = event => {
        this.setState({ id: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        axios.delete(`https://reqres.in/api/users/${this.state.id}`)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    return (
        <Fragment>
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input type="number" name="id" onChange={this.handleChange} />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>
        </Fragment>
    );
}

export default PersonRemove;