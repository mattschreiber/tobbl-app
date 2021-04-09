import React, {useState} from 'react';
import './App.css';

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        console.log(userName, password);
      }

    return (
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
    )
}

export default Login;

    