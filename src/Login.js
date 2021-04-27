import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import './App.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const email = 'test@test.com';
    const pWord ="1234";

    let history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();
        if (email === userName && pWord === password) {
            console.log("login matched");
            history.push('/');
        } else {
            alert("Invalid email or password");
        }
      }

    return (
            <div className="container-fluid">
            <div className='row'>
                <div className='col-sm'></div>
                <div className='col-sm'>
                <form onSubmit={handleSubmit}>
                    <div className={'form-group'}>
                        <label htmlFor='userName'>Email:</label>
                        <input type='email' id='userName' className={'form-control'} value={userName} onChange={e => setUserName(e.target.value)} />
                    </div>
                    <div className={'form-group'}>
                        <label htmlFor='password'>Password:</label>
                        <input type='password' id='password' className={'form-control'} value={password} onChange={e => setPassword(e.target.value)} />
                    </div> 
                    <div className={'form-group'}>
                    <button type="submit" className="btn btn-primary">Submit</button>     
                    </div>     
                </form>
                </div>
                <div className='col-sm'></div>
            </div>
            </div>
    )
}

export default Login;

    