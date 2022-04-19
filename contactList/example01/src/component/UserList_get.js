import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserList_get = () => {

    const [userList, setUserList] = useState([]);

    useEffect(() => {
        axios.get('https://reqres.in/api/users').then(result => {
            setUserList(result.data.data);
        });
    });

    return (
        <Fragment>
            <div className="container-fluid p-3">
                <table class="table table-sm mt-3" style={{ maxWidth: 600 }}>
                    <thead class="thead-dark">
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                    </thead>
                    <tbody>
                        {userList.map( d => 
                            <tr>
                                <td>{d.id}</td>
                                <td>{d.first_name}</td>
                                <td>{d.last_name}</td>
                                <td>{d.email}</td>
                                <td><img src={d.avatar} width="45" height="45" /></td>
                            </tr>
                            )}
                    </tbody>
                </table>

            </div>
        </Fragment>
    );
}

export default UserList_get;