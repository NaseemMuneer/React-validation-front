import React, { useState } from 'react'


function Register() {

    const [user, setUser] = useState({
        email: "",
        password: ""
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
        <div className="container-fluid register-container shadow-lg w-75 py-3">

            {console.log("User",user)}
            <div className='text-center'>
                <h1>Register</h1>
            </div>
            <div className="form container w-50 py-5">
                <form>

                <div className="mb-3">
                        <label for="" className="form-label" >Username</label>
                        <input type="text" name="name" value={user.name} className="form-control" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label" >Email address</label>
                        <input type="email" name="email" value={user.email} className="form-control" onChange={handleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Password</label>
                        <input type="password" name="password" value={user.password} className="form-control " onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Re-enter Password</label>
                        <input type="password" name="reEnterPassword" value={user.reEnterPassword} className="form-control " onChange={handleChange} />
                    </div>
                    <div className="text-center ">
                        <button type="submit" className="btn btn-primary  w-100">Register</button>
                        <h5>or</h5>
                        <button type="submit" className="btn btn-primary  w-100">Login</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Register
