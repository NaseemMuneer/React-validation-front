import React from 'react'
import './homepage.css'

function HomePage() {
    return (
        <div className="home-page">
            <div className="home-div w-75 text-center m-auto shadow-lg rounded-3">
                <h1>Wellcome</h1>
                <div className="logout ">
                    <button className="btn btn-primary w-25 mt-3">Logout</button>
                </div>
            </div>
        </div>
    )
}

export default HomePage
