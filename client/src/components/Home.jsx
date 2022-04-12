import React from 'react'
import Navbar from './Navbar';
import { Link } from 'react-router-dom'


function Home() {
    return (<>
        <Navbar />
        <div style={{ backgroundColor: "black", height: "100vh" }}>
            <div className='home_content'>

                <h1>Welcome to CrowdSource</h1>

                <h3>" Pay what you Trust "</h3>
                <img src="https://media4.giphy.com/media/L59aKIC2MFyfUfrz3n/giphy.gif?cid=ecf05e477lepdo5fbzek47sukyjfdsg3g965b1p7canyq3sh&rid=giphy.gif&ct=g" alt="" width="300px" />

                <div>
                    <Link to="/projects" style={{ backgroundColor: "white" }}> <button> Checkout Projects</button> </Link>
                </div>
            </div>
        </div>
    </>
    )
}

export default Home