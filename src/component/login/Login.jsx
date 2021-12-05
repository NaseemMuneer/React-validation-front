import React,{useState} from 'react'
import './login.css'


function LoginPage() {

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        reEnterPassword: ""
    })
    const handleChange = e => {
        const { name, value } = e.target
        console.log(name, value);

        setUser({
            ...user,
            [name]:value
        })

    }

    return (
        <div className="container-fluid login-container ">
            <div className='register-div w-50  m-auto mt-5 shadow-lg p-4'>
                <div className='text-center'>
                {console.log("User",user)}
                <h1>Login</h1>
                </div>
                <div className="form container">
                    <form>
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" name="email" value={user.email}  className="form-control"  onChange={handleChange} />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label  className="form-label">Password</label>
                            <input name="password" value={user.password} type="password" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="text-center ">
                        <button type="submit" className="btn btn-primary  w-100">Login</button>
                        <h5>or</h5>
                        <button type="submit" className="btn btn-primary  w-100">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
