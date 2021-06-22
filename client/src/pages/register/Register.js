import './register.css';

const Register = () => {
    return (
        <div className='login'>
            <div className='loginWrapper'>
                <div className='loginLeft'>
                    <h3 className='loginLogo'>Social App</h3>
                    <span className='loginDesc'>
                        Connect with Friends, make new Ones.
                    </span>
                </div>
                <div className='loginRight'>
                    <div className='loginBox'>
                        <input placeholder='Username' className='loginIput'></input>
                        <input placeholder='Email' className='loginInput'></input>
                        <input placeholder='Password' className='loginInput'></input>
                        <input placeholder='Repeat Password' className='loginInput'></input>
                        <button className='loginButton'>
                            Sign Up
                            </button>
                        <button className='loginAccountButton'>
                            Log in
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
