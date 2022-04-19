import React, { Fragment, useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserInput_post = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [job, setJob] = useState('');
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const handleSubmit = () =>{
        setLoading(true);
        setIsError(false);
        const data  ={
            firstName : firstName,
            lastName : lastName,
            job : job
        }
        axios.post('https://reqres.in/api/users', data).then(result =>{
            setData(result.data);
            setFirstName('');
            setLastName('');
            setJob('');
            setLoading(false);
        }).catch( error => {
            setLoading(false);
            setIsError(true);
        });
    }

    return (
        <Fragment>
            <div style={{ maxWidth: 400 ,margin: 30}}>
                <div className='from-group'>
                    <label>First Name</label>
                    <input type="text" className='form-control' id='name' placeholder='Enter Name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                </div>
                <div className='from-group'>
                    <label>Last Name</label>
                    <input type="text" className='form-control' id='Last' placeholder='EnterLast Name' value={lastName} onChange={e => setLastName(e.target.value)} />
                </div>
                <div className='from-group'>
                    <label>Job</label>
                    <input type="text" className='form-control' id='job' placeholder='Enter Job' value={job} onChange={e => setJob(e.target.value)} />
                </div>

                <button type='submit' className="btn btn-primary mt-3" onClick={handleSubmit} disabled={loading} >{loading ? 'loading..' : 'Submit'}</button>

                {
                    data && <div className='mt-3'>
                        <h2>OutPut :</h2>
                        <pre>
                            {JSON.stringify(data, null, 2)}
                        </pre>
                        </div>
                }
            </div>
        </Fragment>
    );
}

export default UserInput_post;