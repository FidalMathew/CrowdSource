import React from 'react'
import Navbar from './Navbar';
import projects from '../projects';
import { Link } from 'react-router-dom'

function Projects() {
    return (<>
        <Navbar />
        <div className='projects'>

            {
                projects.map((val, ind) => {
                    return (<div className='pro'>
                        Company: {val.Company} <br /><br />
                        Credibility: {val.Credibility}<br /><br />
                        <Link to={`/company/${val.Company}`} style={{ backgroundColor: "white" }} ><button>Checkout</button> </Link>
                    </div>)
                })
            }
        </div>
    </>
    )
}

export default Projects